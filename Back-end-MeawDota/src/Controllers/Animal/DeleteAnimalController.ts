import { Request, Response } from "express";
import { prismaClient } from "../../database/prisma.cliente";

export class DeleteAnimalController{
    async handler(req: Request, res: Response){
        let { animal_id } = req.params
        const animal_cod = parseInt(animal_id)

        try{
            const animal = await prismaClient.animal.delete({ 
                where: {animal_cod}
            })    
            console.log(animal)
            return res.json("Deleted Sucessfuly").status(200)
        }catch(e){
            return res.json(e).status(400)
        }

    }
}