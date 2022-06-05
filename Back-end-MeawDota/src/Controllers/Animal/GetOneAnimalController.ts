import { prisma, Prisma } from "@prisma/client"
import { Request, Response } from "express"
import { prismaClient } from "../../database/prisma.cliente"

export class GetOneAnimalController {
    async handler(req:Request, res: Response){
        let { animal_id } = req.params
        const animal_cod = parseInt(animal_id)

        try{
            const animal = await prismaClient.animal.findFirst({ 
                where: {
                    animal_cod
                }
            })
            return res.json(animal).status(200)
        }catch(e){
            return res.json(e).status(400)
        }
    }
}
