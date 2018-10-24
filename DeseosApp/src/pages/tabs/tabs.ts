import { Component } from '@angular/core';

import { PendientePage } from '../pendientes/pendientes.component';
import {TerminadosPAge} from '../terminados/terminados.component'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PendientePage;
  tab2Root = TerminadosPAge;

  constructor() {

  }
}
