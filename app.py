import json
import os
import pickle
import numpy as np
import pandas as pd
from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
import datetime
from datetime import date
from db_driver import *


app = Flask(__name__)

model = load_model('model')
encoders = pickle.load(open('encoders.pickle', 'rb'))
demand = pickle.load(open('demand.pickle', 'rb'))

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


@app.route('/predictions')
def get_prediction():
    today = datetime.datetime.today()
    in_dict = json.load(request.get_json(force=True))
    ID = in_dict['patientId']
    req_day = in_dict['requestedDate']
    # req_day = '2021-01-28'
    req_day = datetime.datetime.strptime(req_day, '%Y-%m-%d')
    # data = get_patient_mongo('60094e1f3e94cd527cf36bb6')
    data = get_patient_mongo(ID)
    df = pd.DataFrame(index=[0])
    if data['Gender'].lower() == 'female':
        df['Gender'] = 0
    elif data['Gender'].lower() == 'male':
        df['Gender'] = 1
    df['Age'] = data['Age']
    df['ScheduledDay'] = 0
    df['AppointmentDay'] = 0
    df['wait_time'] = (req_day - today).days
    df['Scholarship'] = data['Scholarship']
    df['Hypertension'] = data['Hypertension']
    df['Diabetes'] = data['Diabetes']
    df['Alcoholism'] = data['Alcoholism']
    df['Handicap'] = data['Handicap']

    enc_arr = encoders[1].transform(np.array(data['Location']).reshape(-1, 1)).toarray()
    df_neighbourhoods = pd.DataFrame(data=enc_arr, columns=encoders[1].get_feature_names())
    df = pd.concat([df, df_neighbourhoods], axis=1)
    df = pd.DataFrame(encoders[2].transform(df), columns=df.columns)
    predictions = dict()
    for day in range(15):
        df['ScheduledDay'] = (req_day.weekday() + day) % 7
        if df['ScheduledDay'].any() in [5, 6]:
            predictions[req_day + datetime.timedelta(days=day)] = 0
        else:
            prediction = model.predict(df)
            predictions[req_day + datetime.timedelta(days=day)] = prediction
        df['wait_time'] += 1
    output = dict()
    for key in predictions:
        new_key = key.strftime('%Y-%m-%d')
        opening = get_opening(new_key)
        if opening <= 0:
            output[new_key] = 0
        elif predictions[key] > 0.5 - ((7-opening)/7)*(0.5-0.2):
            output[new_key] = 0
        else:
            output[new_key] = 1
    return jsonify(output)


if __name__ == '__main__':
    # print(get_prediction())
    port = os.environ.get('PORT')

    if port:
        app.run(host='0.0.0.0', port=int(port))
    else:
        app.run()
