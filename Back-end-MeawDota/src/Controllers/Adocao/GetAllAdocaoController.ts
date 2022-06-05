import { prismaClient } from "../../database/prisma.cliente";
import { Request, Response } from 'express'

export class GetAllAdocaoController{ 
    async handler(req: Request, res: Response){
        try{ 
        const adocao = prismaClient.adocao.findMany()
            return res.json(adocao).status(200)   
        }
        catch(e){
            console.log(e)
            return res.json("it was not possible to find none adoption").status(400)
        }
    }
}