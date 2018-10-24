import { Component } from "@angular/core";
import { DeseosProvider } from "../../providers/deseos.provider";

@Component({
    selector: 'page-pendientes',
    templateUrl: 'pendientes.component.html'
})
export class PendientePage {

    constructor(public deseosService: DeseosProvider) {

    }
}