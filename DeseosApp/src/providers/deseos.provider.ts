import { Injectable } from "@angular/core";
import { List } from "../models";

@Injectable()
export class DeseosProvider {

    list: List[] = []

    constructor() {
        const list1 = new List('Recolectar piedras del infinito')
        const list2 = new List('Heroes a vencer')

        this.list.push(list1)
        this.list.push(list2)
    }
}