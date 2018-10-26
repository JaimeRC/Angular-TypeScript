import { Component } from "@angular/core";
import { DeseosProvider } from "../../providers/deseos.provider";
import { NavController, AlertController } from "ionic-angular";
import { AgregarPage } from "../agregar/agregar.component";

@Component({
    selector: 'page-pendientes',
    templateUrl: 'pendientes.component.html'
})
export class PendientesPage {

    constructor(public deseosService: DeseosProvider,
        private navCtrl: NavController,
        public alertCtrl: AlertController) {
    }

    addList() {
        const alert = this.alertCtrl.create({
            title: 'Nueva Lista',
            message: 'Nombre de la nueva lista de Deseos',
            inputs: [{ name: 'title', placeholder: 'Nombre de la Lista' }],
            buttons: [{
                text: 'Cancelar'
            }, {
                text: 'Agregar',
                handler: data => {
                    console.log(data,"agregar")
                    if (data.title.length === 0) {
                        return
                    }
                    this.navCtrl.push(AgregarPage, {
                        title: data.title
                    })
                }
            }]
        })
        alert.present()
    }
}