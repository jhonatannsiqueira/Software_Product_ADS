import express, { request, response } from "express"
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())
app.use(cors())

app.post('/usuarios', async (request, response) => {
    
    await prisma.usuario.create({
        data: {
            email: request.body.email,
            nome: request.body.nome,
            idade: request.body.idade
        }
    })

    response.status(201).json({
        message: "Usuário CADASTRADO com SUCESSO!"
    })
})

app.put('/usuarios/:id', async (request, response) => {
    
    await prisma.usuario.update({
        where: {
            id: request.params.id
        },
        data: {
            email: request.body.email,
            nome: request.body.nome,
            idade: request.body.idade
        }
    })

    response.status(200).json({
        message: "Usuário ATUALIZADO com SUCESSO!"
    })
})

app.delete('/usuarios/:id', async (request, response) => {

    await prisma.usuario.delete({
        where: {
            id: request.params.id
        }
    })

    response.status(200).json({
        message: "Usuário DELETADO com SUCESSO!"
    })
})

app.get('/usuarios', async (request, response) => {

    let usuarios = []

    if(request.query){
        usuarios = await prisma.usuario.findMany({
            where: {
                email: request.query.email,
                nome: request.query.nome,
                idade: request.query.idade
            }
        })
    } else {
        usuarios = await prisma.usuario.findMany()
    }
    
    response.status(200).json(usuarios)
})

app.listen(3000)

/*
    Criar API de Usuários
    - Criar um Usuário
    - Listar os Usuários
    - Editar um Usuário
    - Deletar um Usuário
*/