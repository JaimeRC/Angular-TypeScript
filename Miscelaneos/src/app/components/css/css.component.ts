import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p>
      css works! (css.component)
    </p>
  `,
  styles: [
    `
    p{
      font-size: 20px;
      color: red;
    }
    `
  ]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
