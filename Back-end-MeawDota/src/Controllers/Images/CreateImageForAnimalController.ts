import { prismaClient } from "../../database/prisma.cliente";
import { Request, Response } from "express";

export class CreateImageController{
    async handler(req: Request, res: Response){
        let { animal_id } = req.params
        const id_animal = parseInt(animal_id)

        const requestImages = req.files as Express.Multer.File[];
        const images = requestImages.map(image => {
            return {path: image.filename }
        })
        
        let path1 = images.map(function(obj){ 
            return Object.keys(obj).map(function(key) {
                return obj[key]
            })
        })

        var path = path1.reduce((list, sub) => list.concat(sub), [])

        const image = await prismaClient.image_Animal.create({ 
            data: {
                path,
                id_animal
            }
        })
        return res.json(image).status(200)
    }
}