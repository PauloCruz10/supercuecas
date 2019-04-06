import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabComponent } from './Tab/tab.component';
import { ConaComponent } from './cona/cona.component';

import 'prismjs/prism';
import 'prismjs/components/prism-typescript';
import { PrismComponent } from 'angular-prism';


@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    ConaComponent,
    PrismComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  exports:[
    PrismComponent
  ],
  providers: [PrismComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
