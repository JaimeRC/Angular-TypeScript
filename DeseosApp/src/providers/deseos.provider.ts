import { Injectable } from "@angular/core";
import { List } from "../models";

@Injectable()
export class DeseosProvider {

    lists: List[] = []

    constructor() {
        this.loadStorage()
    }

    addList(newList: List) {
        this.lists.push(newList)
        this.saveStorage()
    }

    removeList(oldList: List) {
        this.lists = this.lists.filter(listData => listData.id !== oldList.id)
        this.saveStorage()
    }

    loadStorage() {
        if (localStorage.getItem('data')) {
            this.lists = JSON.parse(localStorage.getItem('data'))
        } else {
            this.lists = []
        }
    }

    saveStorage() {
        localStorage.setItem('data', JSON.stringify(this.lists))
    }
}