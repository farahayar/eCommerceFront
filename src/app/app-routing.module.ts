import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/ecom/home/home.component';
import { ProductAddComponent } from './components/seller/product-add/product-add.component';


const routes: Routes = [
  {
    path:"",
    redirectTo:"Home",
    pathMatch:"full"
  },
  {
    path:"Home",
    component:HomeComponent
  },
  {
    path:"ProductAdd",
    component:ProductAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
