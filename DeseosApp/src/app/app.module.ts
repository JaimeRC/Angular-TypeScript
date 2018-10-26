import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//Components
import { PendientesPage } from '../pages/pendientes/pendientes.component'
import { TerminadosPage } from '../pages/terminados/terminados.component'
import { AgregarPage } from '../pages/agregar/agregar.component';
import { ListsComponent } from '../components/lists.component';

//Providers
import { DeseosProvider } from '../providers/deseos.provider';

//Pipes
import { FilterCompletePipe } from '../pipes/filter-complete/filter-complete';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PendientesPage,
    TerminadosPage,
    AgregarPage,
    FilterCompletePipe,
    ListsComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PendientesPage,
    TerminadosPage,
    AgregarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DeseosProvider,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
  ]
})

export class AppModule { }
