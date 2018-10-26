import { Injectable } from "@angular/core";
import { List } from "../models";

@Injectable()
export class DeseosProvider {

    lists: List[] = []

    constructor() {
        this.loadStorage()
    }

    addList(newList: List) {
        console.log("add")

        this.lists.push(newList)
        this.saveStorage()
    }

    removeList(oldList: List) {
        console.log("remove")

        this.lists = this.lists.filter(listData => listData.id !== oldList.id)
        this.saveStorage()
    }

    loadStorage() {
        console.log("load",localStorage.getItem('data'))

        if (localStorage.getItem('data')) {
            this.lists = JSON.parse(localStorage.getItem('data'))
        } else {
            this.lists = []
        }
    }

    saveStorage() {
        console.log("save")

        localStorage.setItem('data', JSON.stringify(this.lists))
    }
}