import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { DiretivaNgifComponent } from './diretiva-ngif/diretiva-ngif.component';

@NgModule({
  declarations: [
    AppComponent,
    OutputPropertyComponent,
    DiretivaNgifComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
