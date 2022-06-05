import { Request, Response } from "express"
import { prismaClient } from "../../database/prisma.cliente"

export class GetAllAnimalController {
    async handler(req:Request, res: Response){
        try{
            const animais = await prismaClient.animal.findMany()
            return res.json(animais).status(200)  
        }catch(e){
            return res.json("it was not possible find adoption")
        }   
    }
}
