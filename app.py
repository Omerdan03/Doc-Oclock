import json
import os
import pickle
import numpy as np
import pandas as pd
from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model

app = Flask(__name__)

# model = pickle.load(open('model.pickle', 'rb'))
model = load_model('model')
encoders = pickle.load(open('encoders.pickle', 'rb'))
demand = pickle.load(open('demand.pickle', 'rb'))
data2 = {'Gender': 'F', 'ScheduledDay': '2016-04-29T18:38:08Z', 'Age': 62, 'Neighbourhood': 'JARDIM DA PENHA',
         'Scholarship': 0, 'Hypertension': 1, 'Diabetes': 0, 'Alcoholism': 0, 'Handicap': 0}

@app.route("/")
def home():
    return "This is the prediction API. Send a Json and get a prediction. "

#
# @app.route('/predictions')
# def get_id():
#     ID = request.get_json(force=True)
#     # ID = pd.DataFrame(json.loads(ID))
#     # data = scaler.fit_transform(data)
#     # prediction = model.predict(data)
#     # output = list(map(int, prediction))
#     # return jsonify(output)
#     return ID

#
# def get_data():
#     ID = get_id()
#     pass

@app.route('/predictions')
def get_prediction():
    # data = get_data()
    data = pd.DataFrame(data2, index=[0])  # TODO The data should be in the same order like df_t in order for the model to work. \
    # TODO (gender - ScheduledDay - AppointmentDay - wait_time - Scholarship - Hypertension - Diabetes - Alcoholism - Handicap - SMSReceived - encoded Neighbourhood
    data['Gender'] = pd.Series(encoders[0].transform(data['Gender']), index=data.index)  # TODO the gender is Male or female not M/F like our database (your encoder wont work)
    data['ScheduledDay'] = pd.to_datetime(data['ScheduledDay']).dt.date.astype('datetime64[ns]').dt.weekday  # TODO ScheduledDay is today not given
    # encoders[1].fit(data['Neighbourhood'].to_numpy().reshape(-1, 1))
    enc_arr = encoders[1].transform(data['Neighbourhood'].to_numpy().reshape(-1, 1)).toarray()
    df_neighbourhoods = pd.DataFrame(data=enc_arr, columns=encoders[1].get_feature_names(),
                                     index=data.index)

    data = pd.concat([data, df_neighbourhoods], axis=1)
    data.drop('Neighbourhood', axis=1, inplace=True)
    data = pd.DataFrame(encoders[2].fit_transform(data), columns=data.columns)
    predictions = list()
    for day in range(6):      # TODO We should not predict on day 5 & 6
        data['ScheduledDay'] = day
        prediction = model.predict(data)  # TODO the wait time should be different between each of those prediction
        predictions.append(int(prediction))   # TODO why int?
    return jsonify(predictions)


if __name__ == '__main__':
    print(get_prediction())
    port = os.environ.get('PORT')

    if port:
        app.run(host='0.0.0.0', port=int(port))
    else:
        app.run()
