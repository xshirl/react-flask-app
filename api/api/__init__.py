from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/hello')
def hello():
    return jsonify({'result': "Hello World"})
