import { RouterModule, Routes } from "@angular/router";
import {
    HomeComponent,
    RationDetailsComponent,
    LandingPageComponent
} from "@cs/main";
import { APP_URLS } from "@cs/consts";
import { NgModule } from "@angular/core";

const homeRoutes: Routes = [
    {
        path: "", component: HomeComponent, children: [
            {
                path: "", component: LandingPageComponent
            },
            {
                path: APP_URLS.RATION_DETAILS, component: RationDetailsComponent
            },
            {
                path: "", pathMatch: "full", redirectTo: APP_URLS.DASHBOARD
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(homeRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class HomeRoutingModule {}
