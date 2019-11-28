import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

export class AmountService {
    constructor(public httpClient: HttpClient) {
    }

    addAmount(amountParams): Observable<any> {
        return this.httpClient.post('https://knolmoney.free.beeceptor.com/users/amount', {
            amount: amountParams.amount,
            userId: amountParams.userId
        });
    }
}
