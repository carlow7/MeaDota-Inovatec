import { Request, Response } from "express"
import { prismaClient } from "../../database/prisma.cliente"

export class CreatePersonFisicController {
    async handler(req:Request, res: Response){
        let {pessoa_email, pessoa_nome, pessoa_senha,pessoa_cep, pessoa_numerocasa, pessoa_dtnascimento,pessoa_cpf, pessoa_zona, pessoa_documento} = req.body
        
        pessoa_dtnascimento = new Date(pessoa_dtnascimento)

        const person = await prismaClient.pessoa.create({ 
            data: {
                pessoa_email, 
                pessoa_nome, 
                pessoa_senha, 
                pessoa_cep,
                pessoa_numerocasa,
                pessoa_cpf,
                pessoa_dtnascimento,
                pessoa_documento,
                pessoa_zona,
            }
        })
        return res.json(person).status(200)
    }
}