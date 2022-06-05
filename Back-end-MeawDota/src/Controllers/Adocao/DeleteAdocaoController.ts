import { prismaClient } from "../../database/prisma.cliente";
import { Request, Response } from 'express'

export class DeleteAdocaoController{
    async handler(req:Request, res: Response){
        let { adocao_cod } = req.body
        try{ 
         const adocao = prismaClient.adocao.delete({ 
             where: { 
                 adocao_cod
             }
         })
            return res.json(adocao).status(204)   
        }
        catch(e){
            console.log(e)
            return res.json("it was not possible to delete the adoption").status(400)
        }
    }
}