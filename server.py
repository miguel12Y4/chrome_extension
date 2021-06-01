from flask import *
from flask_cors import CORS


app = Flask(__name__)
cors = CORS(app, resources={r"/hola/*": {"origins": ["https://www.youtube.com/", "https://golive.im/"]}})


@app.route('/',methods = ['POST'])
def home():
    data = request.get_data().decode()
    f = open ('data.txt','a')
    f.write(",\n")
    f.write(data)
    f.close()

    return 'éxito'

if __name__ == '__main__':
   app.run(host='0.0.0.0', port=8000, debug=True)
