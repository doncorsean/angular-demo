import { NgModule } from '@angular/core';
import { BrowserModule,  } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DataService } from "./app.service";
import { HttpModule } from "@angular/http";

@NgModule({
    declarations:   [ AppComponent ],
    imports:        [ BrowserModule, HttpModule ],
    providers:      [ DataService ],
    bootstrap:      [ AppComponent ]
})
export class AppModule {}
