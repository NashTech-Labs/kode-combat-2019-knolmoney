import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.page.html',
    styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

    items = [
        {name: 'Burger', quantity: 0},
        {name: 'Pizza', quantity: 0},
        {name: 'Rajma Chawal', quantity: 0},
        {name: 'Coke', quantity: 0}
    ];

    constructor() {
    }

    ngOnInit() {
    }


    decrement(itemName) {
        this.items.map(item => {
            if (item.name === itemName) {
                item.quantity--;
            }
        })
    }

    increment(itemName) {
        this.items.map(item => {
            if (item.name === itemName) {
                item.quantity++;
            }
        })
    }
}
