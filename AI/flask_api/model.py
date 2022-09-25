%matplotlib inline
import matplotlib.pyplot as plt
# import os
# from scipy.io import wavfile
# from collections import defaultdict, Counter
# from scipy import signal
import numpy as np
import librosa
# import sklearn
import random
# from unicodedata import normalize
# from keras.layers import Dense
# from keras import Input
# import librosa.display
# from keras_preprocessing.sequence import pad_sequences
import tensorflow as tf
# from tensorflow.keras.models import load_model
from flask_cors import CORS
from flask import Flask, jsonify, request
import main
import ffmpeg

app = Flask(__name__)
app.config['DEBUG'] = True
CORS(app)


@app.route('/getbird', methods=['GET'])
def getbird():
    # parsed_request = request.files.get('file')
    fileName = request.form.get('fileName')

    stream = ffmpeg.input(fileName)
    # stream = ffmpeg.input(fileName, format='m4a')
    # stream = ffmpeg.output(stream, '출력.wav')
    stream = ffmpeg.output(stream, fileName, format='wav')
    wav_data = ffmpeg.run(stream)

    # stream = ffmpeg.input('황새.m4a')
    # stream = ffmpeg.output(stream, '황새.wav')
    # ffmpeg.run(stream)

    # dir_path = os.path.dirname(os.path.realpath(__file__))
    # dir_path = dir_path + "\data"
    # saved_file_path = os.path.join(dir_path, fileName)
    # saved_file_path 경로에 받은 file 저장
    # parsed_request.save(saved_file_path)	
    # data = jsonify(data)
    # return data


    # 저장된(학습된) 모델 가져오기
    # model = load_model('../bird_determine_model220922.h5')
    model = tf.keras.models.load_model('../bird_determine_model220922.h5')

    # 받아온 오디오 데이터
    # DATA_DIR = './sample_bird/'

    wav, sr = librosa.load(wav_data, sr=16000)
    # wav, sr = librosa.load(DATA_DIR + 'sample_6(황새).wav', sr=16000)

    mfcc = librosa.feature.mfcc(wav, sr=16000, n_mfcc=100, n_fft=400, hop_length=160)
    # mfcc = sklearn.preprocessing.scale(mfcc, axis=1)
    pad2d = lambda a, i: a[:, 0:i] if a.shape[1] > i else np.hstack((a, np.zeros((a.shape[0], i-a.shape[1]))))
    padded_mfcc = pad2d(mfcc, 300)
    padded_mfcc = np.expand_dims(padded_mfcc, 0)

    result = model.predict(padded_mfcc)

    # 어떤 결과를 리턴시켜야 하나
    return np.argmax(result)




if __name__ == '__main__':
    app.run(host="0.0.0.0", port="5000",  debug=True)

