import { prismaClient } from "../../database/prisma.cliente";
import { Request, Response } from 'express'

export class GetOneAdocaoController{ 
    async handler(req: Request, res: Response){
        let { adocao_cod } = req.body
        try{ 
         const adocao = prismaClient.adocao.findFirst({ 
             where: { 
                 adocao_cod
             }
         })
            return res.json(adocao).status(200)   
        }
        catch(e){
            console.log(e)
            return res.json("it was not possible find the adoption").status(400)
        }
    }
}