import { constructDependencies } from "@angular/core/src/di/reflective_provider";


export class ListItem {

    desc: string
    complete: boolean

    constructor(desc: string) {
        this.desc = desc
        this.complete = false
    }
}