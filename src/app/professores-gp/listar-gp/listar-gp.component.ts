import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfessoresGpService } from '../professores-gp.service';

@Component({
  selector: 'app-listar-gp',
  templateUrl: './listar-gp.component.html',
  styleUrls: ['./listar-gp.component.scss']
})
export class ListarGpComponent implements OnInit {

  professores : any = [];

  //private activatedRoute : ActivatedRoute
  // modificador de acesso, nome da variável e Classe do objeto a ser injetado
  constructor(
    private activatedRoute: ActivatedRoute,
    private professoresGpService: ProfessoresGpService
  ) {
    // this.activatedRoute = new ActivatedRoute();
  }


  ngOnInit(): void {

    this.professoresGpService.getAll()
      .subscribe(
        (data) => {
          console.log(data);
          this.professores = data;
        }
      );

    // pega os dados da rota
    // dentro do subscribe, estou esperando uma eronfuction que vai conseguir pegar
    // os parêmentros que estão na rota
    this.activatedRoute.params.subscribe(
      (data) => {
        console.log(data);
      }
    );
  }

  onDelete(id : number){
    this.professoresGpService.delete(id)
      .subscribe(
        ()=>{
          console.log(`deletou registro com id ${id}`);

          this.getAll();
        }
      );
  }

  private getAll(){
    this.professoresGpService.getAll()
    .subscribe(
      (data) => {
        console.log(data);
        this.professores = data;
      }
     );
  }

}

