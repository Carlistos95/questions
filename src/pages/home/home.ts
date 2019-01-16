import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PreguntaImagenPage } from '../pregunta-imagen/pregunta-imagen';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goPagina2():void{
    this.navCtrl.push(PreguntaImagenPage);
  }

}
