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
    today = datetime.datetime.today()
    # in_dict = json.load(request.get_json(force=True))
    # ID = in_dict['patientId']
    # req_day = in_dict['requestedDate']
    req_day = '2021-01-28'
    req_day = datetime.datetime.strptime(req_day, '%Y-%m-%d')
    data = get_patient_mongo('60094e1f3e94cd527cf36bb6')
    # data = pd.DataFrame(get_patient_demo(None), index=[0])
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
    for day in range(7):      # TODO We should not predict on day 5 & 6
        df['ScheduledDay'] = req_day.day + day
        if df['ScheduledDay'].any() in [6, 7]:
            predictions[req_day + day] = 0
        else:
            prediction = model.predict(df)  # TODO the wait time should be different between each of those prediction
            predictions[req_day + datetime.timedelta(days=day)] = prediction   # TODO why int?
        df['wait_time'] += 1
    output = dict()
    for key in predictions:
        new_key = key.strftime('%Y-%m-%d')
        output[new_key] = predictions[key]
    return output
    # return jsonify(predictions)


if __name__ == '__main__':
    print(get_prediction())
    port = os.environ.get('PORT')

    if port:
        app.run(host='0.0.0.0', port=int(port))
    else:
        app.run()
