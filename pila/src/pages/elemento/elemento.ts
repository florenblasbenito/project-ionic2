import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component ({
    selector: 'page.elemento',
    templateUrl: 'elemento.html'

})

export class ElementoPage {

    numeroPag: number;

    constructor(public navCtrl: NavController,
    public NavParams: NavParams) {

this.numeroPag = NavParams.data;

    }

agregarPagina(){
  this.navCtrl.push(ElementoPage, this.numeroPag + 1);
  
}


volver(){

    this.navCtrl.pop();


}
}