import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { ListarGpComponent } from './listar-gp/listar-gp.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { ProfessoresgpRoutingModule } from './professores-gp-routing.module';
import { ProfessoresGpFormComponent } from './professores-gp-form/professores-gp-form.component';

const routes: Routes = [

  {path: 'professores', component: ListarGpComponent}
];

@NgModule({
  declarations: [
    ListarGpComponent,
    ProfessoresGpFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    ProfessoresgpRoutingModule,

  ]
})
export class ProfessoresGpModule { }
