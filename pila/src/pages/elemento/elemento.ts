import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component ({
    selector: 'page.elemento',
    templateUrl: 'elemento.html'

})

export class ElementoPage {
    constructor(public navCtrl: NavController) {}

volver(){

    this.navCtrl.pop();


}
}