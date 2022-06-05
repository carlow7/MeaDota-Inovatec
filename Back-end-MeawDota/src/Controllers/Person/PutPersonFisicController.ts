import { prismaClient } from "../../database/prisma.cliente";
import { Request, Response } from "express";

export class PutPersonFisicController{
    async handler(req: Request, res: Response){
        const{ pessoa_email } = req.params
        let {pessoa_nome, pessoa_senha,pessoa_cep, pessoa_numerocasa, pessoa_dtnascimento,pessoa_cpf, pessoa_zona, pessoa_documento} = req.body

        pessoa_dtnascimento = new Date(pessoa_dtnascimento)

        const person = await prismaClient.pessoa.update({
        data:{ 
            pessoa_email,
            pessoa_nome, 
            pessoa_senha,
            pessoa_cep, 
            pessoa_numerocasa, 
            pessoa_dtnascimento,
            pessoa_cpf, 
            pessoa_zona, 
            pessoa_documento
        }, where :{ 
            pessoa_email
        }
    })
        console.log(person)

        return res.json(person).status(200)
    }
}