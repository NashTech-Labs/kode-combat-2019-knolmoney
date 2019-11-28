import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {LoadingService} from "../_services/loading.service";
import {AuthService} from "../_store/auth/auth.service";
import {NgxsModule} from "@ngxs/store";
import {AuthState} from "../_store/auth/auth.state";
import {AmountService} from "../_services/amount.service";

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        HttpClientModule,
        NgxsModule.forRoot([
            AuthState
        ])
    ],
    providers: [
        StatusBar,
        SplashScreen,
        AuthService,
        LoadingService,
        AmountService,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
