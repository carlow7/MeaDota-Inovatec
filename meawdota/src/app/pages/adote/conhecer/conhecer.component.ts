import { Component, OnInit } from '@angular/core';
import { AxiosService } from 'src/services/Axios.service';
import { Router,ActivatedRoute } from '@angular/router';
import { Animal } from "../cards/cards.component"

@Component({
  selector: 'app-conhecer',
  templateUrl: './conhecer.component.html',
  styleUrls: ['./conhecer.component.css']
})

export class ConhecerComponent implements OnInit {
  animal: Animal = {
    id: '',
    nome: '',
    sexo: '',
    idade: '',
    vacinado: '',
    castrado: '',
    bairro: '',
    descricao: '',
    vermifugado: '',
    situacao: '',
    id_image: 0,
    path: '',
    id_animal: ''
  }
  constructor(
    private Service: AxiosService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  async ngOnInit(): Promise<void> {  
    let bicho, image

    const animal_id = this.route.snapshot.paramMap.get('id');
    bicho = await this.Service.getAnimal(animal_id)
    image = await this.Service.getImageByAnimalID(animal_id)
    this.animal = {
      'id':bicho.animal_cod,
      'nome': bicho.animal_nome,
      'idade': bicho.animal_idade,
      'descricao': bicho.animal_descricao,
      'bairro': bicho.animal_bairroocorrencia,
      'sexo': bicho.animal_sexo,
      'castrado': bicho.animal_castracao,
      'vacinado': bicho.animal_vacinacao,
      'vermifugado': bicho.animal_vermifugado,
      'situacao': bicho.animal_situacao,
      'id_image': image.id,
      'id_animal': bicho.animal_cod,
      'path': image.path.toString()
    
    }
    console.log(this.animal)
  }
}