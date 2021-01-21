import json
import os
import pickle

import pandas as pd
from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model

app = Flask(__name__)

# model = pickle.load(open('model.pickle', 'rb'))
model = load_model('model')
encoders = pickle.load(open('encoders.pickle', 'rb'))
demand = pickle.load(open('demand.pickle', 'rb'))
data2 = {'Gender': 'F', 'Age': 62, 'Neighbourhood': 'JARDIM DA PENHA', 'Scholarship': 0,
                      'Hypertension': 1, 'Diabetes': 0, 'Alcoholism': 0, 'Handicap': 0}

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
    data = pd.DataFrame(data2, index=[0])
    data['Gender'] = pd.Series(encoders[0].transform(data['Gender']), index=data.index)
    # encoders[1].fit(data['Neighbourhood'].to_numpy().reshape(-1, 1))
    enc_arr = encoders[1].transform(data['Neighbourhood'].to_numpy().reshape(-1, 1)).toarray()
    Neighbourhoods = encoders[1].get_feature_names()
    df_neighbourhoods = pd.DataFrame(data=enc_arr, columns=encoders[1].get_feature_names(),
                                     index=data.index)

    data = pd.concat([data, df_neighbourhoods], axis=1)
    data.drop('Neighbourhood', axis=1, inplace=True)
    data = pd.DataFrame(encoders[2].fit_transform(data), columns=data.columns)
    predictions = list()
    for day in range(6):
        data['AppointmentDay'] = day
        prediction = model.predict(data)
        predictions.append(int(prediction))
    return jsonify(predictions)


if __name__ == '__main__':
    print(get_prediction())
    port = os.environ.get('PORT')

    if port:
        app.run(host='0.0.0.0', port=int(port))
    else:
        app.run()
