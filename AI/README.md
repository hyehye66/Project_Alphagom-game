# AI 데이터셋 파일 변환 및 저장 방법

## 1. pydub 모듈 설치
```
pip install pydub
```

## 2. webm_to_wav 파일 안에 음성 데이터셋 폴더 옮기기

폴더 명 규칙 : `{title}-{start index}-{end index}`

예시)
```
webm_to_wav
  main.py
  아니-1151-1350
  응-1151-1350
```

## 3. python 파일 실행

주의!! AI 디렉토리에서 실행할 것
```
python webm_to_wav/main.py
```

## 4. 변환 완료된 데이터 백업 후 사용한 디렉토리 삭제하기
예시)
```
webm_to_wav
  main.py
```