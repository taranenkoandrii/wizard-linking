import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WizardModule } from './wizard/wizard.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        WizardModule
    ],
    providers: [],
  exports: [
    AppComponent,
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
