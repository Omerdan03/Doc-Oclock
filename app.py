import json
import os
import pickle

import pandas as pd
from flask import Flask, request, jsonify

app = Flask(__name__)

model = pickle.load(open('model.pickle', 'rb'))


@app.route('/predictions')
def results():
    data = request.get_json(force=True)
    data = pd.DataFrame(json.loads(data))
    prediction = model.predict(data)
    output = list(map(int, prediction))
    return jsonify(output)


if __name__ == '__main__':
    port = os.environ.get('PORT')

    if port:
        app.run(host='0.0.0.0', port=int(port))
    else:
        app.run()
