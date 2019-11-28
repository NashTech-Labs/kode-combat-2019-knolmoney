import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-stores',
  templateUrl: './stores.page.html',
  styleUrls: ['./stores.page.scss'],
})
export class StoresPage implements OnInit {
  items = [
      'Pantry',
      'Gift Shop'
  ];

  constructor(public router: Router) { }

  ngOnInit() {
  }

    openItems() {
        this.router.navigate(['menu']);
    }
}
