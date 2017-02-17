import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { DataService } from "./app.service";
import { AppComponent } from "./app.component";

@NgModule({
    imports:  [ BrowserModule, HttpModule ],
    providers: [ DataService ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
