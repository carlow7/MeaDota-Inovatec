import { Request, Response } from "express";
import { prismaClient } from "../../database/prisma.cliente";

export class DeletePersonController{
    async handler(req: Request, res: Response){
        const{ pessoa_email } = req.params

        try{
            const person = await prismaClient.pessoa.delete({ 
                where: {pessoa_email}
            })
            console.log(person)
    
            return res.status(204)
        }catch(e){
            return res.json(e).status(400)
        }
    }
}