import json
import os
import pickle
import numpy as np
import pandas as pd
from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
from datetime import datetime
from datetime import date
from db_driver import *


app = Flask(__name__)

# model = pickle.load(open('model.pickle', 'rb'))
model = load_model('model')
encoders = pickle.load(open('encoders.pickle', 'rb'))
demand = pickle.load(open('demand.pickle', 'rb'))
data2 = {'Gender': 'F', 'Age': 62, 'Neighbourhood': 'JARDIM DA PENHA',
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
def get_data():
    # ID = get_id(
    return data2

@app.route('/predictions')
def get_prediction():
    #ID = request.get_json(force=True)
    # data = get_patient_demo(ID)
    # data = pd.DataFrame(get_patient_mongo(None), index=[0])
    data = pd.DataFrame(get_patient_demo(None), index=[0])
    df = pd.DataFrame(index=[0])
    if data.loc[0, 'Gender'] == 'Female':
        data.loc[0, 'Gender'] = 'F'
    elif data.loc[0, 'Gender'] == 'Male':
        data.loc[0, 'Gender'] = 'M'
    df['Gender'] = pd.Series(encoders[0].transform(data['Gender']))
    df['Age'] = data['Age']
    df['ScheduledDay'] = 0
    df['AppointmentDay'] = 0
    df['wait_time'] = 0
    df['Scholarship'] = data['Scholarship']
    df['Hypertension'] = data['Hypertension']
    df['Diabetes'] = data['Diabetes']
    df['Alcoholism'] = data['Alcoholism']
    df['Handicap'] = data['Handicap']
    # data = pd.DataFrame(data2, index=[0])  # TODO The data should be in the same order like df_t in order for the model to work. \
    # TODO (gender - Age - ScheduledDay - AppointmentDay - wait_time - Scholarship - Hypertension - Diabetes - Alcoholism - Handicap - SMSReceived - encoded Neighbourhood
    # data['Gender'] = pd.Series(encoders[0].transform(data['Gender']), index=data.index)  # TODO the gender is Male or female not M/F like our database (your encoder wont work)
    today = pd.to_datetime('today').weekday()
    # df['Neighbourhood'] = encoders[1].transform(data['Location'])
    enc_arr = encoders[1].transform(data['Location'].to_numpy().reshape(-1, 1)).toarray()
    df_neighbourhoods = pd.DataFrame(data=enc_arr, columns=encoders[1].get_feature_names(),
                                     index=data.index)
    df = pd.concat([df, df_neighbourhoods], axis=1)
    df = pd.DataFrame(encoders[2].fit_transform(df), columns=df.columns)
    predictions = list()
    for day in range(7):      # TODO We should not predict on day 5 & 6
        df['ScheduledDay'] = day
        df['wait_time'] = (df['AppointmentDay'] - df['ScheduledDay'])
        prediction = model.predict(df)  # TODO the wait time should be different between each of those prediction
        predictions.append(prediction)   # TODO why int?
    return predictions
    # return jsonify(predictions)


if __name__ == '__main__':
    print(get_prediction())
    port = os.environ.get('PORT')

    if port:
        app.run(host='0.0.0.0', port=int(port))
    else:
        app.run()
