import { Component } from "@angular/core";
import { DataService } from "./app.service";

@Component({
    selector: "app",
    template: "<div>I can haz decorator?</div>",
    providers: [DataService]
})
export class AppComponent {

}
