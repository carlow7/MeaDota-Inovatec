import { Request, response, Response } from "express"
import { prismaClient } from "../../database/prisma.cliente"

export class FindPersonFisicController {
    async handler(req:Request, res: Response){
        
        const person = await prismaClient.pessoa.findMany({ 
            where : {pessoa_documento : 1}
        })

        return res.json(person).status(200)
    }
}