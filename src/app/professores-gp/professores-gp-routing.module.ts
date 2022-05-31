import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarGpComponent } from './listar-gp/listar-gp.component';
import { ProfessoresGpFormComponent } from './professores-gp-form/professores-gp-form.component';

const routes: Routes = [
  {path: 'professores-gp/listar-gp', component: ListarGpComponent},
  {path: 'professores-gp/criar-gp', component:  ProfessoresGpFormComponent},
  {path: 'professores-gp/editar/:id', component:  ProfessoresGpFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessoresgpRoutingModule { }
