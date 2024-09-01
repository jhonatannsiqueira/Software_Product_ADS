import express, { request, response } from "express"

const app = express()
app.use(express.json())

const users = []

app.post('/usuarios', (request, response) => {
    
    users.push(request.body)

    response.send('Ok, Post deu certo!!')
})

app.get('/usuarios', (request, response) => {
    response.json(users)
})

app.listen(3000)

/*
    Criar API de Usuários
    - Criar um Usuário
    - Listar os Usuários
    - Editar um Usuário
    - Deletar um Usuário
*/