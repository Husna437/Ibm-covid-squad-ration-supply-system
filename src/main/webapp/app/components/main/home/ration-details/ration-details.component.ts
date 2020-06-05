import { Component, OnInit, ComponentFactoryResolver, Injector, OnDestroy} from "@angular/core";
import { UtilService, FullPageLoadingIndicatorService, ModalService, NotificationsService } from "@cs/components/common";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { TranslateService } from "@ngx-translate/core";
import { RationDetailsService } from "@cs/main/home/ration-details/ration-details.service";

@Component({
    selector: "app-ration-details",
    templateUrl: "./ration-details.component.html",
    styleUrls: ["./ration-details.component.less"],
    providers: [RationDetailsService]
})
export class RationDetailsComponent implements OnInit, OnDestroy {

    headers: any[] = [];
    rows: any[] = [];
    states = [];
    districts = [];
    circle = [];

    private ngUnsubscribe: Subject<any> = new Subject();

    constructor(private utilService: UtilService,
        private translate: TranslateService,
        private notificationsService: NotificationsService,
        private modalService: ModalService,
        private fpli: FullPageLoadingIndicatorService
        ) { }

    ngOnInit() {
        this.fpli.conceal();
        this.states = ["Karnataka", "TamilNadu"];
        this.districts = ["Bangalore"];
        this.circle = ["Yelhanka"];
        this.headers = [
            {name: "Ration Card Number", width: "10%"},
            {name: "Consumer Name", width: "10%"},
            {name: "Consumer Address", width: "10%"},
            {name: "Consumer Phone Number", width: "10%"},
            {name: "Ration Amount", width: "10%"},
            {name: "Price", width: "5%"},
            {name: "Status Delivered/Not Delivered", width: "15%", sortable: false}
        ];
        this.getRationDetails();
    }

    getRationDetails() {
        let rows = [];
        rows.push({
            data: [
                "12345678",
                "Husna Khanam",
                "#xyz,doorr no xyz,xyz road,yelhanka,bangalore",
                "1234567890",
                "5kg Rice,2lts oil, 2kg wheat",
                "100Rs",
                "Delivered"
            ],
            metadata: { // not visible in the UI
            }

        });
    this.rows = rows.slice();
    }


    onStateSwitch($event) {}
    onDistrictSwitch($event){}
    onCircleSwitch($event){}
    getDetails(){}
    
    ngOnDestroy() {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }

}
