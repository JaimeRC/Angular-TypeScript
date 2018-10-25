import { Component, Input } from "@angular/core";
import { DeseosProvider } from "../providers/deseos.provider";
import { List } from "../models";
import { NavController, AlertController, ItemSliding } from "ionic-angular";
import { AgregarPage } from "../pages/agregar/agregar.component";


@Component({
    selector: 'app-lists',
    templateUrl: 'lists.component.html'
})
export class ListsComponent {

    @Input() complete: boolean = false

    constructor(public deseosService: DeseosProvider, private navCtrl: NavController, private alertCtrl: AlertController) {
    }

    itemSelected(list: List) {
        this.navCtrl.push(AgregarPage, {
            title: list.title,
            list: list
        })
    }

    removeList(list: List) {
        this.deseosService.removeList(list)
    }

    editList(list: List, slidingItem: ItemSliding) {

        slidingItem.close()

        const alert = this.alertCtrl.create({
            title: 'Editar Nombre',
            message: 'Editar el nombre de la Lista',
            inputs: [{ name: 'Titulo', placeholder: 'Nombre de la Lista', value: list.title }],
            buttons: [{
                text: 'Cancelar'
            }, {
                text: 'Guardar',
                handler: data => {
                    if (data.title.length === 0) {
                        return
                    }
                    list.title = data.title
                    this.deseosService.saveStorage()
                }
            }]
        })
        alert.present()
    }
}