import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabComponent } from './Tab/tab.component';
import { ConaComponent } from './cona/cona.component';

//import 'prismjs/prism';
//import 'prismjs/components/prism-typescript';
//import { PrismComponent } from 'angular-prism';
import { PrismModule } from '@ngx-prism/core'; // <----- Here



@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    ConaComponent,
    //PrismComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrismModule
  ],
  exports:[
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
