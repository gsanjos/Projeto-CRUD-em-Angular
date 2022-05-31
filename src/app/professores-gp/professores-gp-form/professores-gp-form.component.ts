import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfessoresGpService } from '../professores-gp.service';

@Component({
  selector: 'app-professores-gp-form',
  templateUrl: './professores-gp-form.component.html',
  styleUrls: ['./professores-gp-form.component.scss']
})
export class ProfessoresGpFormComponent implements OnInit {

    // 1-) alocar a variável que vai ter os controles do form
    meuForm : FormGroup = new FormGroup({});

    // 2-) injetar o FormBuilder para poder ajudar a criar os controles do form
    constructor(
      private formBuilder: FormBuilder,
      private professoresgpService: ProfessoresGpService,
      private router:Router,
      private activatedRoute: ActivatedRoute
      ) { }

    // 3-) alocar os controles na variável meuForm através do formBuilder
    ngOnInit(): void {
      this.meuForm = this.formBuilder.group({
        nome : [ null, [ Validators.required ] ],
        email : [ null, [ Validators.required ] ],
      });


      //pegar parâmentros que vem da rota
      this.activatedRoute.params
        .subscribe(
          (parametros : any) => {
            console.log(parametros);

            //é EDIÇÃO
            if (parametros.id){
              console.log(`edição id ${parametros.id}`)
              //PRECISO consultar a API para buscar todas as informações do ID a ser editado

              this.professoresgpService.getOne(parametros.id)
              .subscribe(
                (dadosProfessores) => {
                  console.log(dadosProfessores);
                  // patchValue atualiza os campos do formulário de acordo com o nome dos controles
                  this.meuForm.patchValue(dadosProfessores);
                }
              );
            }

            //é CRIAÇÃO
            else{
              console.log('criaçao');
            }

          }
        )
    }

    // 4-) integrar os controles do form no HTML
    onSubmit(){
      console.log(this.meuForm.value);
      this.professoresgpService.save(this.meuForm.value)

        .subscribe(
          (data) => {
            console.log(data);
            // o navigate é para redirecionar para uma outra rota de endereço
            this.router.navigate(['/professores-gp/listar-gp']);
          }
        );
    }
  }
