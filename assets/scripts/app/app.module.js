System.register(["@angular/core", "@angular/platform-browser", "./app.component", "./app.service", "@angular/http"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, platform_browser_1, app_component_1, app_service_1, http_1, AppModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }
        ],
        execute: function () {
            AppModule = (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = __decorate([
                core_1.NgModule({
                    declarations: [app_component_1.AppComponent],
                    imports: [platform_browser_1.BrowserModule, http_1.HttpModule],
                    providers: [app_service_1.DataService],
                    bootstrap: [app_component_1.AppComponent]
                })
            ], AppModule);
            exports_1("AppModule", AppModule);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3JpcHRzL2FwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBWWEsU0FBUztnQkFBdEI7Z0JBQXdCLENBQUM7Z0JBQUQsZ0JBQUM7WUFBRCxDQUF4QixBQUF5QixJQUFBO1lBQVosU0FBUztnQkFOckIsZUFBUSxDQUFDO29CQUNOLFlBQVksRUFBSSxDQUFFLDRCQUFZLENBQUU7b0JBQ2hDLE9BQU8sRUFBUyxDQUFFLGdDQUFhLEVBQUUsaUJBQVUsQ0FBRTtvQkFDN0MsU0FBUyxFQUFPLENBQUUseUJBQVcsQ0FBRTtvQkFDL0IsU0FBUyxFQUFPLENBQUUsNEJBQVksQ0FBRTtpQkFDbkMsQ0FBQztlQUNXLFNBQVMsQ0FBRzs7UUFDekIsQ0FBQyIsImZpbGUiOiJhcHAvYXBwLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlLCAgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRhU2VydmljZSB9IGZyb20gXCIuL2FwcC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6ICAgWyBBcHBDb21wb25lbnQgXSxcbiAgICBpbXBvcnRzOiAgICAgICAgWyBCcm93c2VyTW9kdWxlLCBIdHRwTW9kdWxlIF0sXG4gICAgcHJvdmlkZXJzOiAgICAgIFsgRGF0YVNlcnZpY2UgXSxcbiAgICBib290c3RyYXA6ICAgICAgWyBBcHBDb21wb25lbnQgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cbiJdfQ==
