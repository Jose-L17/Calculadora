import { Component, OnInit } from '@angular/core';

import { modulo } from '../modulo/modulo';
import { maximo } from '../maximo/maximo';
import { minimo } from '../minimo/minimo';


@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {

  constructor() { }

  result = 0;
  operator1 = 0;
  operator2 = 0;
  text = " ";

  Operacion = " ";

  ngOnInit() {
  }

  Modulo() {
    let myresult = 1;
    myresult = modulo(this.operator1, this.operator2);
    this.result = myresult;
    this.Operacion = " % "
    this.text = "El Modulo es: " + this.result;
  }

  Maximo() {
    let myresult = 1;
    myresult = maximo(this.operator1, this.operator2);
    this.result = myresult;
    this.Operacion = " Max "
    this.text = "El Maximo es: " + this.result;
  }

  Minimo() {
    let myresult = 1;
    myresult = minimo(this.operator1, this.operator2);
    this.result = myresult;
    this.Operacion = " Min "
    this.text = "El Minimo es: " + this.result;
  }


}
