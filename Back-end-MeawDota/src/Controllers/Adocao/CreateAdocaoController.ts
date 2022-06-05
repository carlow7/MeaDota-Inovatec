import { prismaClient } from "../../database/prisma.cliente";
import { Request, Response } from 'express'

export class CreateAdocaoController{ 
    async handler(req: Request, res: Response){
        let { adocao_animalcod,adocao_pessoa } = req.body
        try{ 
         const adocao = prismaClient.adocao.create({ 
            data: {
                adocao_animalcod,
                adocao_pessoa    
            }
        })
            return res.json(adocao).status(200)   
        }
        catch(e){
            console.log(e)
            return res.json("it was not possible to register the adoption").status(400)
        }
    }
}