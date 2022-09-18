import os
from pydub import AudioSegment 
from pydub.utils import make_chunks

#audioSegment = AudioSegment.from_file('/Users/mac/Downloads/speech_command/left/sample-1.webm', 'webm')
#audioSegment.export('/Users/mac/Downloads/speech_command/left/sample-1.wav', format='wav')

data_dir = '.'
folder_names = os.listdir(data_dir)
folder_names = [folder_name for folder_name in folder_names if not folder_name.startswith ('.') and not folder_name.startswith('m')] #.DS_Store 제외
for folder_name in folder_names:
    print(folder_name) #left
    file_names = os.listdir('{}/{}'.format(data_dir, folder_name))
    file_names = [file_name for file_name in file_names if not file_name.startswith ('.')] #.DS_Store 제외
    #file_names = file_names[:100] #데이터를 100개로 제한
    for file_name in file_names:
        if file_name.endswith('webm'):
            print(file_name) #/Users/mac/Downloads/speech_command/right/sample-1.wav
            file_path = '{}/{}/{}'.format(data_dir, folder_name, file_name)
            '''
            audioSegment = AudioSegment.from_file(file_path, 'webm')
            new_file_path = file_path.replace('webm', 'wav')
            audioSegment.export(new_file_path, format='wav')
            print(new_file_path)
            '''
            #'''
            audioSegment = AudioSegment.from_file(file_path, 'webm')
            chunk_length_ms = 1000 #1밀리 초
            chunks = make_chunks(audioSegment, chunk_length_ms)
            for i, chunk in enumerate(chunks):
                if len(chunk) < 1000:
                    continue
                new_file_path = file_path.replace('.webm', '{0}.wav').format(i + 1)
                chunk.export(new_file_path, format='wav')
                print(new_file_path) #/Users/mac/Downloads/speech_command/right/sample-1-1.wav
            #'''