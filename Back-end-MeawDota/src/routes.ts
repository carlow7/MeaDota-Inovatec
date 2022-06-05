import { Router } from "express";
import multer from 'multer';

import uploadConfig from './config/upload';

const upload = multer(uploadConfig);
//Pessoas
import { CreatePersonFisicController } from "./Controllers/Person/CreatePersonFisicController";
import { CreatePersonJuridicController } from "./Controllers/Person/CreatePersonJuridicController";
import { FindPersonJuridicController } from "./Controllers/Person/FindPersonJuridicController";
import { FindPersonFisicController } from "./Controllers/Person/FindPersonFisicController";
import { DeletePersonController } from "./Controllers/Person/DeletePersonController";
import { PutPersonFisicController } from "./Controllers/Person/PutPersonFisicController";
import { PutPersonJuridicController } from "./Controllers/Person/PutPersonJuridicController";
import { FindOnePersonController } from "./Controllers/Person/FindOnePersonController";
// Animais
import { CreateAnimalController } from "./Controllers/Animal/CreateAnimalController";
import { GetAllAnimalController } from "./Controllers/Animal/GetAllAnimalController";
import { GetOneAnimalController } from "./Controllers/Animal/GetOneAnimalController";
import { PutAnimalController } from "./Controllers/Animal/PutAnimalController";
import { DeleteAnimalController } from "./Controllers/Animal/DeleteAnimalController";

//Images
import { CreateImageController } from "./Controllers/Images/CreateImageForAnimalController";
import { GetImagesController } from "./Controllers/Images/GetImagesController";

// Adocao
import { CreateAdocaoController } from "./Controllers/Adocao/CreateAdocaoController";
import { GetOneAdocaoController } from "./Controllers/Adocao/GetOneAdocaoController";
import { GetAllAdocaoController } from "./Controllers/Adocao/GetAllAdocaoController";
import { DeleteAdocaoController } from "./Controllers/Adocao/DeleteAdocaoController";

const router = Router()

// Pessoas
const createPersonFisic = new CreatePersonFisicController()
const createPersonJuridic = new CreatePersonJuridicController()
const findPersonJ = new FindPersonJuridicController()
const findPersonF = new FindPersonFisicController()
const findOnePerson = new FindOnePersonController()
const deletePerson = new DeletePersonController()
const putPersonFisic = new PutPersonFisicController()
const putPersonJuridic = new PutPersonJuridicController()


router.post('/createUserFisic',createPersonFisic.handler)
router.post('/createUserJuridic',createPersonJuridic.handler)
router.get('/GetUsersJuridic', findPersonJ.handler)
router.get('/GetUsersFisic', findPersonF.handler)
router.get('/UserOne/:pessoa_email', findOnePerson.handler)
router.delete('/DeleteUser/:pessoa_email', deletePerson.handler)
router.put('/UserFisic/:pessoa_email', putPersonFisic.handler)
router.put('/UserJuridic/:pessoa_email', putPersonJuridic.handler)

// Animais
const createAnimal = new CreateAnimalController()
const getAllAnimais = new GetAllAnimalController()
const findOneAnimal = new GetOneAnimalController()
const putAnimal = new PutAnimalController()
const deleteAnimal = new DeleteAnimalController()


router.post('/Animal', createAnimal.handler)
router.get('/Animais', getAllAnimais.handler)
router.get('/Animal/:animal_id',findOneAnimal.handler)
router.put('/Animal/:animal_id',putAnimal.handler)
router.delete('/Animal/:animal_id', deleteAnimal.handler)

//Images
const createImage = new CreateImageController()
const getImage = new GetImagesController()

router.post('/Animal/Image/:animal_id', upload.array('images'), createImage.handler)
router.get('/Animal/Image/:animal_id', getImage.handler)

// Adocao
const createAdocao = new CreateAdocaoController()
const getAllAdocao = new GetAllAdocaoController()
const findOneAdocao = new GetOneAdocaoController()
const deleteAdocao = new DeleteAdocaoController()


router.post('/Adocao', createAdocao.handler)
router.get('/Adocao', getAllAdocao.handler)
router.get('/Adocao/:Adocao_cod',findOneAdocao.handler)
router.delete('/Adocao/:Adocao_cod', deleteAdocao.handler)

export { router }