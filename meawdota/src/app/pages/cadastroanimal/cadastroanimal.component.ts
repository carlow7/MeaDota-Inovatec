import { Component, OnInit } from '@angular/core';
import { AxiosService } from 'src/services/Axios.service';

export interface CadastroAnimal {
  animal_sexo: string ;
  animal_nome: string;
  animal_idade: string;
  animal_descricao: string;
  animal_castracao:string;
  animal_vacinacao:string;
  animal_vermifugado:string;
  animal_bairroocorrencia:string;
  animal_ruaocorrencia:string;
  animal_especie:Number;
  animal_pessoacad:string;
  animal_situacao:string;
}

export interface ImageAnimal {
  images: File
  id_animal: string;
}

@Component({
  selector: 'app-cadastroanimal',
  templateUrl: './cadastroanimal.component.html',
  styleUrls: ['./cadastroanimal.component.css']
})
export class CadastroanimalComponent implements OnInit {
  selectedFile!: File 
  animal!: CadastroAnimal
  imageData!: ImageAnimal

  router: any;

  constructor(private service: AxiosService){}

  async ngOnInit(): Promise<void> {
  }

  createanimal(){
    
  }
}

