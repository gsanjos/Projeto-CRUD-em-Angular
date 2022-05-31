import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfessoresGpService {

  // httpClient é um serviço angular que permite acessar o endereço REST
  constructor(private httpClient: HttpClient) { }

  getAll(){
    return this.httpClient.get('http://cursos.grandeporte.com.br:8080/professores');
  }

  save(professorObj : any){
    return this.httpClient.post('http://cursos.grandeporte.com.br:8080/professores', professorObj);
  }

  delete(id : number){
    return this.httpClient.delete(`http://cursos.grandeporte.com.br:8080/professores/${id}`);
  }

  getOne(id : number){
    return this.httpClient.get(`http://cursos.grandeporte.com.br:8080/professores/${id}`);
  }
}
