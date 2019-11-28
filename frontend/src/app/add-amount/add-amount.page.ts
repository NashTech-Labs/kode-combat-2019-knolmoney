import {Component, OnInit} from '@angular/core';
import {LoadingService} from "../../_services/loading.service";
import {AlertController} from "@ionic/angular";
import {AuthModel, UserModel} from "../../_store/auth/auth.model";
import {AmountService} from "../../_services/amount.service";


@Component({
    selector: 'app-add-amount',
    templateUrl: './add-amount.page.html',
    styleUrls: ['./add-amount.page.scss'],
})
export class AddAmountPage implements OnInit {

    amount;
    amountErrors;

    constructor(public loadingService: LoadingService, public alert: AlertController, public amountService: AmountService) {
    }

    ngOnInit() {
    }

    addMoney() {
        let validated = true;
        if (!this.amount) {
            this.amountErrors = 'Please enter amount';
            return false;
        }
        this.loadingService.present();
        const auth = JSON.parse(localStorage.getItem('auth'));
        this.amountService.addAmount({
            amount: this.amount,
            userId: auth.userInfo.userId
        }).subscribe((res) => {
            this.loadingService.dismiss();
            this.alert.create({message: 'Request Sent Successfully'}).then(a => {
                a.present().then(() => {
                });
            });
        }, () => {
            this.loadingService.dismiss();
            this.alert.create({message: 'Some error occurred. Please try again later.'}).then(a => {
                a.present().then(() => {
                });
            });
        });
    }

}
