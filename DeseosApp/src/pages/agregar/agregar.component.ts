import { Component } from "@angular/core";
import { DeseosProvider } from "../../providers/deseos.provider";
import { List, ListItem } from "../../models"
import { NavParams } from "ionic-angular";

@Component({
    selector: 'page-agregar',
    templateUrl: 'agregar.component.html'
})
export class AgregarPage {

    list: List
    nameItem: string = ''

    constructor(public deseosService: DeseosProvider,
        private navParams: NavParams) {
        const title = this.navParams.get('title')

        if (this.navParams.get('list')) {
            this.list = this.navParams.get('list')

        } else {
            this.list = new List(title)
            this.deseosService.addList(this.list)
        }
    }

    addItem() {
        if (this.nameItem.length === 0) {
            return
        }
        const newItem = new ListItem(this.nameItem)
        this.list.items.push(newItem)
        this.deseosService.saveStorage()
        this.nameItem = ''
    }

    updateTask(item: ListItem) {
        item.complete = !item.complete
        const pendientes = this.list.items.filter(itemData => !itemData.complete).length

        if (pendientes === 0) {
            this.list.finish = true
            this.list.finishDate = new Date()
        } else {
            this.list.finish = false
            this.list.finishDate = null
        }

        this.deseosService.saveStorage()
    }

    removeItem(index: number) {
        this.list.items.splice(index, 1)
        this.deseosService.saveStorage()
    }
}