import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GerenteModule } from './gerente/gerente.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        GerenteModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
