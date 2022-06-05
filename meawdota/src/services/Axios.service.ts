import { Injectable } from "@angular/core";
import axios from "axios";

@Injectable({
    providedIn:'root'
})

export class AxiosService {
    urlAnimais: string = "http://127.0.0.1:3333/Animais"
    urlAnimal: string  = "http://127.0.0.1:3333/Animal/"
    urlImages: string =  "http://127.0.0.1:3333/Animal/Image/"
    urlPostAnimal: string  = "http://127.0.0.1:3333/Animal"

    constructor(){

    }

    async get(){
        return await axios.get(this.urlAnimais).then(animais => {
            console.log(animais.data)
            return animais.data
        }).catch((e) => {
            console.log(e)
        })
    }

    async getImageByAnimalID(animal_id: string | null){
        return await axios.get(this.urlImages + animal_id).then(image => {
            console.log(image)
            return image.data
        }).catch((e) => {
            console.log(e)
        })
    }

    async getAnimal(animal_id: string | null){ 
        return await axios.get(this.urlAnimal + animal_id).then(animal => {
            console.log(animal.data)
            return animal.data
        }).catch((e) => {
            console.log(e)
        })
    }

    async createAnimal(Animal: object){
        return await axios.post(this.urlPostAnimal, Animal).then(res => {
            console.log(res.data)
            return res.data
        }).catch((e) => {
            console.log(e)
        })
    }

    async postImageByAnimalID(animal_id: string | null, data : object){
        return await axios.post(this.urlImages + animal_id, data).then(image => {
            console.log(image.data)
            return image.data
        }).catch((e) => {
            console.log(e)
        })
    }
}