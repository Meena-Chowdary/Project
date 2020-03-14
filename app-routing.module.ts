import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { SellerRegistrationComponent } from './seller-registration/seller-registration.component';
import { HomeComponent } from './home/home.component';
import { FashionComponent } from './fashion/fashion.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { EndpageComponent } from './endpage/endpage.component';
import { MenComponent } from './men/men.component';
import { FemaleComponent } from './female/female.component';
import { KidsComponent } from './kids/kids.component';
import { GadgetsComponent } from './gadgets/gadgets.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { MachinesComponent } from './machines/machines.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ItemsPresentComponent } from './items-present/items-present.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"contact",component:ContactComponent},
  {path:"login",component:ProfileComponent},
  {path:"register",component:RegisterComponent},
  {path:"view",component:ItemsPresentComponent},
  {path:"seller",component:SellerRegistrationComponent},
  {path:"register_seller",component:SellerRegistrationComponent},
  {path:"addCategory",component:AddCategoryComponent},
  {path:"fashion",component:FashionComponent},
  {path:"men",component:MenComponent},
  {path:"female",component:FemaleComponent},
  {path:"kids",component:KidsComponent},
  {path:"electronics",component:ElectronicsComponent},
  {path:"gadgets",component:GadgetsComponent},
  {path:"laptops",component:LaptopsComponent},
  {path:"machines",component:MachinesComponent},
  {path:"cart",component:ShoppingCartComponent},
  {path:"checkout",component:CheckoutComponent},
  {path:"checkout/thankyou",component:EndpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
