from hashlib import new
import os
from pydub import AudioSegment 
from pydub.utils import make_chunks

print("""
       _       _                                 
  __ _| |_ __ | |__   __ _  __ _  ___  _ __ ___  
 / _` | | '_ \| '_ \ / _` |/ _` |/ _ \| '_ ` _ \ 
| (_| | | |_) | | | | (_| | (_| | (_) | | | | | |
 \__,_|_| .__/|_| |_|\__,_|\__, |\___/|_| |_| |_|
        |_|                |___/                 
""")
print(">> convert webm to wav")

#audioSegment = AudioSegment.from_file('/Users/mac/Downloads/speech_command/left/sample-1.webm', 'webm')
#audioSegment.export('/Users/mac/Downloads/speech_command/left/sample-1.wav', format='wav')

data_dir = 'webm_to_wav'
folder_names = os.listdir(data_dir)
folder_names = [folder_name for folder_name in folder_names if not folder_name.startswith ('.') and not folder_name.startswith('m')] #.DS_Store 제외
print(*folder_names, sep="\n")
print()

for folder_name in folder_names:
    title, startIdx, endIdx = folder_name.split('-')
    startIdx = int(startIdx)
    endIdx = int(endIdx)
    
    print('[{}] 데이터 {}~{}(총 {}개)의 변환(webm to wav)을 시작할까요?'.format(title, startIdx, endIdx, endIdx - startIdx + 1))
    confirm = input('[y/n] : ')
    
    if not (confirm == 'y' or confirm == 'yes' or confirm == 'Y'):
        print('변환이 취소되었습니다.')
        continue

    print('파일 변환을 시작합니다.')
    file_names = os.listdir('{}/{}'.format(data_dir, folder_name))
    file_names = [file_name for file_name in file_names if not file_name.startswith ('.')] #.DS_Store 제외
    file_cnt = 0

    for file_name in file_names:
        if file_name.endswith('webm'):
            file_path = '{}/{}/{}'.format(data_dir,folder_name,file_name)
            audioSegment = AudioSegment.from_file(file_path, 'webm')
            chunk_length_ms = 1000 #1밀리 초
            chunks = make_chunks(audioSegment, chunk_length_ms)
            for i, chunk in enumerate(chunks):
                if len(chunk) < 1000:
                    continue
                new_file_path = '{}/{}/{}{}.wav'.format(data_dir, folder_name, title, startIdx+file_cnt)
                chunk.export(new_file_path, format='wav')
            file_cnt += 1
            print('.', end=' ')
    print('\n{}개의 파일 변환이 완료되었습니다!\n'.format(file_cnt))
    
