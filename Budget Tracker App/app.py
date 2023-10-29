#!/usr/bin/python3
from flask import Flask, render_template, url_for
from dotenv import load_dotenv
load_dotenv()

app = Flask(__name__)


@app.route('/')
@app.route('/home')
def home():
    return render_template('index.html')


@app.route('/visual')
def visual():
    return render_template('visual.html')


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
