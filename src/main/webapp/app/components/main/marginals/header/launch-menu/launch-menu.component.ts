import { Component, OnInit } from "@angular/core";
import { UtilService } from "@cs/common";
import { Router } from "@angular/router";
import { APP_URLS } from "@cs/components/core/consts";

@Component({
    selector: "app-launch-menu",
    templateUrl: "./launch-menu.component.html",
    styleUrls: ["./launch-menu.component.less"]
})
export class LaunchMenuComponent implements OnInit {

    
  constructor(private utilService: UtilService,
    private router: Router
  ) { }

    ngOnInit() {
   
}

    getHome() {
        this.router.navigateByUrl(APP_URLS.DASHBOARD + "/" + APP_URLS.RATION_DETAILS)
    }

}
