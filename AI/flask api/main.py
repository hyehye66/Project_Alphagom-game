from flask import Flask, render_template 

app = Flask(__name__)

from datetime import datetime
@app.route('/test')
def whattime():
  now = datetime.now()
  return render_template('now.html', now=now)

if __name__ == "__main__":
    app.run(host='127.0.0.1', port=5000, debug=False)