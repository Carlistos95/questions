import { Component } from '@angular/core';

/**
 * Generated class for the PreguntaImagenComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pregunta-imagen',
  templateUrl: 'pregunta-imagen.html'
})
export class PreguntaImagenComponent {

  text: string;

  constructor() {
    console.log('Hello PreguntaImagenComponent Component');
    this.text = 'Hello World';
  }

}
