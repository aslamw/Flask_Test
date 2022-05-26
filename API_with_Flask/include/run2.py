from flask import Flask, jsonify, request
import json

app = Flask(__name__)

@app.route('/<int:id>')
def minha_api(id):
    return jsonify({'id':id,'name':'Rafael'})

@app.route('/soma',methods=['POST','GET'])
def soma():
    if request.method == 'POST':
        dados = json.loads(request.data)
        total = sum(dados['valores'])

    elif request.method == 'GET':
        total = 'sem soma'
    return jsonify({'soma':total})

if __name__ == '__main__':
    app.run(debug=True)
