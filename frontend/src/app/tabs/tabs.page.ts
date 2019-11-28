import {Component} from '@angular/core';
import {Select, Store} from "@ngxs/store";
import {Observable} from "rxjs";
import {AuthState} from "../../_store/auth/auth.state";

@Component({
    selector: 'app-tabs',
    templateUrl: 'tabs.page.html',
    styleUrls: ['tabs.page.scss']
})
export class TabsPage {

    public appPages = [
        {
            title: 'Dashboard',
            url: '/dashboard',
            icon: 'home'
        }
    ];

    constructor(public store: Store) {
    }

}
