import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiftDeliveryComponent } from './gift-delivery/gift-delivery.component';

const routes: Routes = [
  { path: 'gift-delivery', component: GiftDeliveryComponent },
  { path: '', redirectTo: '/gift-delivery', pathMatch: 'full' }, // redirect to `search-component`
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
