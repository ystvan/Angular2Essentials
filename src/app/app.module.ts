import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

//Decorator from the core package, prefixed with @
// imports, declarations, bootstrap => metadata properties
@NgModule({

  //is used to make components, directives and pipes available
  declarations: [
    AppComponent
  ],
  //is used to bring in other angular modules
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],

  //used for a root module, let angular know which component(s) will be the starting point for the process
  //the entry point for my app code
  bootstrap: [AppComponent]
})

//app root module
export class AppModule { }
