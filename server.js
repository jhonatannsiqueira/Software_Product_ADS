import express, { request, response } from "express"

const app = express()

const users = []

app.post('/usuarios', (request, response) => {
    console.log(request)

    response.send('Ok, Post deu certo!!')
})

app.get('/usuarios', (request, response) => {
    response.send('Ok, deu bom')
})

app.listen(3000)

/*
    Criar API de Usuários
    - Criar um Usuário
    - Listar os Usuários
    - Editar um Usuário
    - Deletar um Usuário
*/