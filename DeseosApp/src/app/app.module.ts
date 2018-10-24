import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//Components
import { TabsPage } from '../pages/tabs/tabs';
import {PendientePage} from '../pages/pendientes/pendientes.component'
import {TerminadosPAge} from '../pages/terminados/terminados.component'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Providers
import { DeseosProvider } from '../providers/deseos.provider';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PendientePage,
    TerminadosPAge
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PendientePage,
    TerminadosPAge
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DeseosProvider
  ]
})
export class AppModule {}
