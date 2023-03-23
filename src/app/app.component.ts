import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  n1: number=0;
  n2: number=0;
  resultado: number=0;
  op: string="";

  ejecutar(){
    this.op = this.op.trim();

    switch (this.op) {
      case '+': this.resultado = this.n1 + this.n2; break;
      case '-': this.resultado = this.n1 - this.n2; break;
      case '*': this.resultado = this.n1 * this.n2; break;
      default:
        this.resultado = 0;
        alert ('error en el operador');
    }
  }

  limpiar(){
    this.n1=0;
    this.n2=0;
    this.op="";
    this.resultado=0;
  }
}
