from flask import Flask
import speech_recognition as sr
from flask_restx import Api  # Api 구현을 위한 Api 객체 import
# from flask_restx import Resource
from datetime import datetime
import jsonify

app = Flask(__name__)
api = Api(app)  # Flask 객체에 Api 객체 등록
r=sr.Recognizer()

@app.route('/test')
def whattime():
  now = datetime.now()
#   return str(now)
  return {"date": now}
  # return jsonify(now)

@app.route("/api/ai/check", methods=["GET"])
def index():
    transcript = ''
    while not transcript:
        with sr.Microphone() as source:
            audio=r.listen(source)
            transcript=r.recognize_google(audio, language="ko-KR")
        
    return transcript     
     

if __name__ == "__main__":
    app.run(debug=True, threaded=True)