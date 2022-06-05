import { prismaClient } from "../../database/prisma.cliente";
import { Request, Response } from "express";
//import path from 'path';


export class GetImagesController{
    // render({ image }: { image; }): { id: any; url: string; id_animal: string}{
    //     return { 
    //         id: image.id, 
    //         url:`http://localhost:3333/uploads/${image.path}`,
    //         id_animal: image.id_animal
    //     }
    // }
    async handler(req:Request, res:Response){
        let { animal_id } = req.params
        const id_animal = parseInt(animal_id)

        try{
            const images = await prismaClient.image_Animal.findFirst({ 
                where: {id_animal : id_animal}
            })
            console.log(images)
            return res.json(images).status(200)
        }catch(e){
            return res.json("Fodeu essa merda").status(400)
        }
    }
}
