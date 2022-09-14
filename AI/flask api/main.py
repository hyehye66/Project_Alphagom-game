from flask import Flask, render_template
import speech_recognition as sr

app = Flask(__name__)
r=sr.Recognizer()

@app.route("/api/ai/check", methods=["GET"])
def index():
    transcript = ''
    # while transcript not in response:
    while not transcript:
        with sr.Microphone() as source:
            audio=r.listen(source)
            transcript=r.recognize_google(audio, language="ko-KR")
        
    # return render_template('index.html', transcript=transcript)
    return transcript     

# from datetime import datetime
# @app.route('/test')
# def whattime():
#   now = datetime.now()
#   return render_template('now.html', now=now)      

if __name__ == "__main__":
    app.run(debug=True, threaded=True)

# if __name__ == "__main__":
#     app.run(host='127.0.0.1', port=5000, debug=False)