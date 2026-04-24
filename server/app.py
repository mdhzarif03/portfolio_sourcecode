# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3

app = Flask(__name__)
CORS(app)

@app.route('/contact', methods=['POST'])
def contact():
    data = request.json
    conn = sqlite3.connect('messages.db')
    c = conn.cursor()
    c.execute("INSERT INTO messages (name,email,message) VALUES (?,?,?)",
              (data['name'], data['email'], data['message']))
    conn.commit()
    conn.close()
    return jsonify({"status":"saved"})

app.run(debug=True)