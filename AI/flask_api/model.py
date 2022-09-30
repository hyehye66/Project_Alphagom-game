import json
import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'
import numpy as np
import librosa
import tensorflow as tf
from flask_cors import CORS, cross_origin
from flask import Flask, request, Response, jsonify
import moviepy.editor as moviepy
import speech_recognition as sr
# import main
import ffmpeg
import sklearn
import warnings
warnings.filterwarnings('ignore')

app = Flask(__name__)
app.config['DEBUG'] = True
CORS(app)


@app.route('/api/ai/check', methods=["POST"])
@cross_origin()
def magiccastle_check():
    # 저장된(학습된) 모델 가져오기
    model = tf.keras.models.load_model('../check_determine_model220927.h5')

    file = request.files['audio_data']
    print(file)
    path='./audio.wav'
    file.save(path)

    audio_input = ffmpeg.input('./audio.wav')
    audio_cut = audio_input.audio.filter('atrim', duration=1)
    audio_output = ffmpeg.output(audio_cut, './audio_output.wav')
    ffmpeg.run(audio_output)

    path='./audio_output.wav'

    wav, sr= librosa.load(path, sr=16000)

    mfcc = librosa.feature.mfcc(wav, sr=16000, n_mfcc=100, n_fft=400, hop_length=160)
    # mfcc = sklearn.preprocessing.scale(mfcc, axis=1)
    pad2d = lambda a, i: a[:, 0:i] if a.shape[1] > i else np.hstack((a, np.zeros((a.shape[0], i-a.shape[1]))))
    padded_mfcc = pad2d(mfcc, 110)
    padded_mfcc = np.expand_dims(padded_mfcc, 0)

    result = model.predict(padded_mfcc)

    # 판별 완료된 음성 파일 삭제
    os.remove('./audio.wav')
    os.remove('./audio_output.wav')

    # 어떤 결과를 리턴시켜야 하나(응 : 0, 아니 : 1)
    return str(np.argmax(result))

@app.route('/api/ai/swamp/word', methods=["POST"])
@cross_origin()
def swamp_word():
    
    model = tf.keras.models.load_model('../word_determine_model220924.h5')
     # 받아온 오디오 데이터

    file = request.files['audio_data']
    print(file)
    path='./audio.wav'
    file.save(path)

    audio_input = ffmpeg.input('./audio.wav')
    audio_cut = audio_input.audio.filter('atrim', duration=1)
    audio_output = ffmpeg.output(audio_cut, './audio_output.wav')
    ffmpeg.run(audio_output)

    path='./audio_output.wav'

    wav, sr= librosa.load(path, sr=16000)

    mfcc = librosa.feature.mfcc(wav, sr=16000, n_mfcc=100, n_fft=400, hop_length=160)
    # mfcc = sklearn.preprocessing.scale(mfcc, axis=1)
    pad2d = lambda a, i: a[:, 0:i] if a.shape[1] > i else np.hstack((a, np.zeros((a.shape[0], i-a.shape[1]))))
    padded_mfcc = pad2d(mfcc, 110)
    padded_mfcc = np.expand_dims(padded_mfcc, 0)

    result = model.predict(padded_mfcc)

    # 판별 완료된 음성 파일 삭제
    os.remove('./audio.wav')
    os.remove('./audio_output.wav')

    # 어떤 결과를 리턴시켜야 하나(냠냠 : 0, 드르륵 : 1, 보글보글 : 2, 사각사각 : 3, 송송 : 4, 주르륵 : 5, 탁탁 : 6, 툭툭 : 7, 팔팔 : 8, 풀풀 : 9, 휘휘 : 10)
    # 팔팔 풀풀 잘 안됨
    return str(np.argmax(result))


@app.route('/api/ai/sky/bird', methods=["POST"])
@cross_origin()
def sky_bird():
    model = tf.keras.models.load_model('../bird_determine_model220928.h5')
    # 받아온 오디오 데이터
    file = request.files['audio_data']
    print(file)
    path='./audio.wav'
    file.save(path)

    audio_input = ffmpeg.input('./audio.wav')
    audio_cut = audio_input.audio.filter('atrim', duration=1)
    audio_output = ffmpeg.output(audio_cut, './audio_output.wav')
    ffmpeg.run(audio_output)

    path='./audio_output.wav'
    
    wav, sr = librosa.load(path, sr=16000)
    
    mfcc = librosa.feature.mfcc(wav, sr=16000, n_mfcc=100, n_fft=400, hop_length=160)
    # mfcc = sklearn.preprocessing.scale(mfcc, axis=1)
    pad2d = lambda a, i: a[:, 0:i] if a.shape[1] > i else np.hstack((a, np.zeros((a.shape[0], i-a.shape[1]))))
    padded_mfcc = pad2d(mfcc, 110)
    padded_mfcc = np.expand_dims(padded_mfcc, 0)

    result = model.predict(padded_mfcc)

    # 판별 완료된 음성 파일 삭제
    os.remove('./audio.wav')
    os.remove('./audio_output.wav')

    # 어떤 결과를 리턴시켜야 하나(까마귀 : 0, 꿩 : 1, 뱁새 : 2, 오리 : 3, 참새 : 4, 황새 : 5)
    # 뱁새 참새 황새 잘 안됨
    print('------api return')
    return str(np.argmax(result))

if __name__ == '__main__':
    app.run(host="0.0.0.0", port="5000",  debug=True)
