import { Component, OnInit } from '@angular/core';
import { AxiosService } from 'src/services/Axios.service';

 export interface Animal {
  id: string;
  nome: string;
  idade: string;
  descricao: string;
  bairro: string;
  sexo: string;
  castrado: string;
  vacinado: string;
  vermifugado: string;
  situacao: string;
  id_image: number;
  path: string;
  id_animal: string;
 }

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit{
  constructor(private service: AxiosService){}

  Animais: Animal[] = []

  async ngOnInit(): Promise<void> {
    let animal, image
    animal = await this.service.get()
    
    for(let a = 0; a<animal.length; a++){
      let id_animal = animal[a].animal_cod.toString()
      image = await this.service.getImageByAnimalID(id_animal)
      const teste :Animal = {
        'id':animal[a].animal_cod,
        'nome': animal[a].animal_nome,
        'idade': animal[a].animal_idade,
        'descricao': animal[a].animal_descricao,
        'bairro': animal[a].animal_bairroocorrencia,
        'sexo': animal[a].animal_sexo,
        'castrado': animal[a].animal_castracao,
        'vacinado': animal[a].animal_vacinacao,
        'vermifugado': animal[a].animal_vermifugado,
        'situacao': animal[a].animal_situacao,
        'id_image': image.id,
        'id_animal': animal.animal_cod,
        'path': image.path.toString()
    }
         this.Animais.push(teste)
    }
      console.log(this.Animais)
    }
}
