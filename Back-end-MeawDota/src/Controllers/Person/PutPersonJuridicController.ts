import { prismaClient } from "../../database/prisma.cliente";
import { Request, Response } from "express";

export class PutPersonJuridicController{
    async handler(req: Request, res: Response){
        const{ pessoa_email } = req.params
        let {pessoa_nome, pessoa_senha,pessoa_cep, pessoa_numerocasa, pessoa_dtnascimento,pessoa_cnpj, pessoa_zona, pessoa_documento, pessoa_empresa} = req.body

        pessoa_dtnascimento = new Date(pessoa_dtnascimento)

        const person = await prismaClient.pessoa.update({
        data:{ 
            pessoa_email,
            pessoa_nome, 
            pessoa_senha,
            pessoa_cep, 
            pessoa_numerocasa, 
            pessoa_dtnascimento,
            pessoa_cnpj, 
            pessoa_zona, 
            pessoa_documento,
            pessoa_empresa
        }, where :{ 
            pessoa_email
        }
    })
        console.log(person)

        return res.json(person).status(200)
    }
}