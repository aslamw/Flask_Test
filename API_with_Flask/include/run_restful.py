import json
from flask import Flask, request
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

Dev = [
    {'id':0, 'name':'rafael'},
    {'id':2, 'name':'anny'},
    {'id':3, 'name':'tony'},
    {'id':4, 'name':'joão'}
]

class Desenvolvedor(Resource):
    def get(self,id):
         try:
            resposta = Dev[id]
         except IndexError:
            resposta = {'status':'erro','menssagem':f'Desenvolvedor de ID {id} invalido'}

         return resposta
    def put(self,id):
        
        dados = json.loads(request.data)
        Dev[id] = dados
        return dados
    
    def delete(self,id):
        Dev.pop(id)
        return {'status':'sucesso','mensagem':'Registro excluído'}
    
class Lista(Resource):
    def get(self):
        return Dev

api.add_resource(Lista, '/dev')
api.add_resource(Desenvolvedor, '/dev/<int:id>/')

if __name__ == '__main__':
    app.run()
