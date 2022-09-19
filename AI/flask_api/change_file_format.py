import ffmpeg
stream = ffmpeg.input('황새.m4a')
stream = ffmpeg.output(stream, '황새.wav')
ffmpeg.run(stream)