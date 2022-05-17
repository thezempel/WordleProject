from flask import Flask
from flask_cors import CORS
import pymysql

cnx = pymysql.connect(user='root',
                      password='Waffles*1159',
                      host='localhost',
                      database='wordledb')

app = Flask(__name__)
CORS(app)

