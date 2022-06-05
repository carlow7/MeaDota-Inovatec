import { Request, Response } from "express"
import { prismaClient } from "../../database/prisma.cliente"

export class PutAnimalController {
    async handler(req:Request, res: Response){
        let {
            animal_sexo,
            animal_nome,
            animal_idade,
            animal_descricao,
            animal_dtcadastro,
            animal_vacinacao,
            animal_vermifugado,
            animal_castracao,
            animal_bairroocorrencia,
            animal_ruaocorrencia,
            animal_especie,
            animal_pessoacad,
            animal_situacao } = req.body
            
            let { animal_id } = req.params
            const animal_cod = parseInt(animal_id)

        const animal = await prismaClient.animal.update({ 
            data: {
                animal_sexo,
                animal_nome,
                animal_idade,
                animal_descricao,
                animal_dtcadastro,
                animal_vacinacao,
                animal_vermifugado,
                animal_castracao,
                animal_bairroocorrencia,
                animal_ruaocorrencia,
                animal_especie,
                animal_pessoacad,
                animal_situacao
            },where :{animal_cod}
        })
        return res.json(animal).status(200)
    }
}
