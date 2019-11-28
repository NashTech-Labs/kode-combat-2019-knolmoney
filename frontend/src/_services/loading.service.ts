import {AlertController, LoadingController} from "@ionic/angular";

export class LoadingService {
    isLoading = false;

    constructor(public loadingController: LoadingController, public alert: AlertController) {
    }

    async present() {
        this.isLoading = true;
        return await this.loadingController.create({
            message: 'Please wait...', spinner: "bubbles", translucent: true
        }).then(a => {
            a.present().then(() => {
                console.log('presented');
                if (!this.isLoading) {
                    a.dismiss().then(() => console.log('abort presenting'));
                }
            });
        });
    }

    async dismiss() {
        this.isLoading = false;
        return await this.loadingController.dismiss().then(() => console.log('dismissed'));
    }

    async alertPresent(message) {
        return await this.alert.create({message}).then(a => {
            a.present().then(() => {
                console.log('presented');
                if (!this.isLoading) {
                    a.dismiss().then(() => console.log('abort presenting'));
                }
            });
        });
    }
}
