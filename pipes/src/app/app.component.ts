import { Component } from '@angular/core';
import { reject } from 'q';
import { promise } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pipes';
  name: string = "Francisco"
  name2: string = "franCisCO GuTIERRez marTIriCO"

  array: Array<Number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  PI: Number = Math.PI
  a: number = 0.234
  salary: number = 1234.5
  heroe: object = {
    nombre: "logan",
    clave: "Wolverine",
    edad: 500,
    direccion: {
      calle: "Primera",
      casa: "19"
    }
  }
  promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Welcome!'),3500)
  })
  date = new Date()
  video:string = "KvRVky0r7YM"
  activar:boolean = true
}
