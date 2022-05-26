from flask import Flask, jsonify, request
import json

app = Flask(__name__)

desenvolvedores = [{'nome':'rafael', 'habilidades':['python','java']},
                   {'nome':'bob',
                    'habilidade':['designer','UX e UI']}]

@app.route('/dev/<int:id>/',methods=['GET','PUT','DELETE'])
def desenvolvedor(id):
    if request.method == 'GET':
        try:
            resposta = desenvolvedores[id]
        except IndexError:
            resposta = {'status':'erro','menssagem':f'Desenvolvedor de ID {id} invalido'}

        return jsonify(resposta)
    elif request.method == 'PUT':
        dados = json.loads(request.data)
        desenvolvedores[id] = dados
        return jsonify(dados)
    elif request.method == 'DELETE':
        desenvolvedores.pop(id)
        return jsonify({'status':'sucesso','mensagem':'Registro excluído'})

@app.route('/dev/',methods=['POST','GET'])
def lista_desenvolvedor():
    if request.method == 'POST':
        dados = json.loads(request.data)
        desenvolvedores.append(dados)
        return jsonify({'status':'sucesso'})
    elif request.method == 'GET':
        return jsonify(desenvolvedores)
if __name__ == '__main__':
    app.run(debug=True)
