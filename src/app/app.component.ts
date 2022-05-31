import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'projeto-angular';

  corFundo = 'background-color: pink;';

  empresa = 'Nava';

  clicar(){
    alert("botão clicado")
  }

  getTextoDigitado(elemento : any){
    console.log(elemento.value)
    this.empresa = elemento.value;
  }
}
