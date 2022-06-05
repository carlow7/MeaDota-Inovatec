import { Request, response, Response } from "express"
import { prismaClient } from "../../database/prisma.cliente"

export class FindPersonJuridicController {
    async handler(req:Request, res: Response){
        
        const person = await prismaClient.pessoa.findMany({ 
            where : {pessoa_documento : 2}
        })

        return res.json(person).status(200)
    }
}