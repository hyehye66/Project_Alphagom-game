import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'
import numpy as np
import librosa
import tensorflow as tf
# from tensorflow.keras.models import load_model
from flask_cors import CORS
from flask import Flask
# import main
# import ffmpeg
# import sklearn
import speech_recognition as sr
import warnings
warnings.filterwarnings('ignore')

app = Flask(__name__)
app.config['DEBUG'] = True
CORS(app)
r=sr.Recognizer()

@app.route('/getbird', methods=['GET'])
def getbird():
    global sr
    with sr.Microphone() as source:
        r.adjust_for_ambient_noise(source)
        audio=r.listen(source)

        with open('bird.wav', 'wb') as f:
            f.write(audio.get_wav_data())

    # parsed_request = request.files.get('file')
    # fileName = request.form.get('fileName')
    # stream = ffmpeg.input(fileName)
    # stream = ffmpeg.input(fileName, format='m4a')
    # stream = ffmpeg.output(stream, '출력.wav')
    # stream = ffmpeg.output(stream, fileName, format='wav')
    # ffmpeg.run(stream)
    # wav_data = ffmpeg.run(stream)

    # 저장된(학습된) 모델 가져오기
    # model = load_model('../bird_determine_model220922.h5')
    model = tf.keras.models.load_model('../bird_determine_model220924.h5')

    # 받아온 오디오 데이터
    wav_data = 'bird.wav'

    wav, sr = librosa.load(wav_data, sr=16000)

    mfcc = librosa.feature.mfcc(wav, sr=16000, n_mfcc=100, n_fft=400, hop_length=160)
    # mfcc = sklearn.preprocessing.scale(mfcc, axis=1)
    pad2d = lambda a, i: a[:, 0:i] if a.shape[1] > i else np.hstack((a, np.zeros((a.shape[0], i-a.shape[1]))))
    padded_mfcc = pad2d(mfcc, 110)
    padded_mfcc = np.expand_dims(padded_mfcc, 0)

    result = model.predict(padded_mfcc)

    # 판별 완료된 음성 파일 삭제
    os.remove("bird.wav")

    # 어떤 결과를 리턴시켜야 하나
    return str(np.argmax(result))


if __name__ == '__main__':
    app.run(host="0.0.0.0", port="5000",  debug=True)

