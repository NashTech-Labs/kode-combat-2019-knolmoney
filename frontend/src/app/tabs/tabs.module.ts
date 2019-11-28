import { IonicModule } from '@ionic/angular';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { TabsPage } from './tabs.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ],
  exports: [
    TabsPage
  ],
  declarations: [TabsPage],
  schemas: [NO_ERRORS_SCHEMA]
})
export class TabsPageModule {}
