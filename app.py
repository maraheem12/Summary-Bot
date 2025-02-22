from flask import Flask, render_template, request, redirect, url_for
import summary

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate_summary', methods=['POST'])
def generate_summary():
    paragraph = request.form['paragraph']
    summary_text = summary.generate_summary(paragraph)
    return {'summary': summary_text}

if __name__ == '__main__':
    app.run(debug=True)