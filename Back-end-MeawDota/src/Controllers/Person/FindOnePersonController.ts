import { Request, response, Response } from "express"
import { prismaClient } from "../../database/prisma.cliente"

export class FindOnePersonController {
    async handler(req:Request, res: Response){
        
        const {pessoa_email} = req.params

        let person = prismaClient.pessoa.findFirst({
            where: {pessoa_email}
        })

        if(!person){
            return res.json().status(404)
        }

        const pessoa = await prismaClient.pessoa.findFirst({ 
            where: {pessoa_email}
        })

        console.log(pessoa)

        return res.json(pessoa).status(200)
    }
}