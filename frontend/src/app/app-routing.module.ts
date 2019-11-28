import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuardService} from "../_services/auth-guard.service";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule'},
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule', canActivate: [AuthGuardService]},
  { path: 'wallet', loadChildren: './wallet/wallet.module#WalletPageModule', canActivate: [AuthGuardService]},
  { path: 'add-amount', loadChildren: './add-amount/add-amount.module#AddAmountPageModule', canActivate: [AuthGuardService]},
  { path: 'transaction-details', loadChildren: './transaction-details/transaction-details.module#TransactionDetailsPageModule', canActivate: [AuthGuardService]},
  { path: 'stores', loadChildren: './stores/stores.module#StoresPageModule', canActivate: [AuthGuardService]},
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule', canActivate: [AuthGuardService]},
  { path: 'order-review', loadChildren: './order-review/order-review.module#OrderReviewPageModule', canActivate: [AuthGuardService]},
  { path: 'order-placed', loadChildren: './order-placed/order-placed.module#OrderPlacedPageModule', canActivate: [AuthGuardService]},
  { path: 'my-profile', loadChildren: './my-profile/my-profile.module#MyProfilePageModule', canActivate: [AuthGuardService]},
  { path: 'admin', loadChildren: './admin/admin.module#AdminPageModule', canActivate: [AuthGuardService]},
  { path: 'view-requests', loadChildren: './view-requests/view-requests.module#ViewRequestsPageModule', canActivate: [AuthGuardService]},
  { path: 'mis-reports', loadChildren: './mis-reports/mis-reports.module#MisReportsPageModule', canActivate: [AuthGuardService]},
  { path: 'analytics', loadChildren: './analytics/analytics.module#AnalyticsPageModule', canActivate: [AuthGuardService]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
