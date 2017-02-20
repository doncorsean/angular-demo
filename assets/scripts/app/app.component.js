System.register(["@angular/core", "./app.service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, app_service_1, AppComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            }
        ],
        execute: function () {
            AppComponent = (function () {
                function AppComponent() {
                }
                return AppComponent;
            }());
            AppComponent = __decorate([
                core_1.Component({
                    selector: "app",
                    template: "<div>I can haz decorator? k thx bai</div>",
                    providers: [app_service_1.DataService]
                })
            ], AppComponent);
            exports_1("AppComponent", AppComponent);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3JpcHRzL2FwcC9hcHAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUWEsWUFBWTtnQkFBekI7Z0JBRUEsQ0FBQztnQkFBRCxtQkFBQztZQUFELENBRkEsQUFFQyxJQUFBO1lBRlksWUFBWTtnQkFMeEIsZ0JBQVMsQ0FBQztvQkFDUCxRQUFRLEVBQUUsS0FBSztvQkFDZixRQUFRLEVBQUUsMkNBQTJDO29CQUNyRCxTQUFTLEVBQUUsQ0FBQyx5QkFBVyxDQUFDO2lCQUMzQixDQUFDO2VBQ1csWUFBWSxDQUV4Qjs7UUFDRCxDQUFDIiwiZmlsZSI6ImFwcC9hcHAuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IERhdGFTZXJ2aWNlIH0gZnJvbSBcIi4vYXBwLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiYXBwXCIsXG4gICAgdGVtcGxhdGU6IFwiPGRpdj5JIGNhbiBoYXogZGVjb3JhdG9yPyBrIHRoeCBiYWk8L2Rpdj5cIixcbiAgICBwcm92aWRlcnM6IFtEYXRhU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcblxufVxuIl19
