import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { SellerRegistrationComponent } from './seller-registration/seller-registration.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { FashionComponent } from './fashion/fashion.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { HousingComponent } from './housing/housing.component';
import { MenComponent } from './men/men.component';
import { FemaleComponent } from './female/female.component';
import { KidsComponent } from './kids/kids.component';
import { GadgetsComponent } from './gadgets/gadgets.component';
import { LaptopsComponent } from './laptops/laptops.component';
import { MachinesComponent } from './machines/machines.component';
import { EndpageComponent } from './endpage/endpage.component';
import { CheckoutComponent } from './checkout/checkout.component';

import { AddCategoryComponent } from './add-category/add-category.component';
import { ItemsService } from './services/item.service';
import { NewItemService } from './services/new-item.service';
import { ItemsPresentComponent } from './items-present/items-present.component';
import { CartService } from './services/cart.service';
import { BuyerHomeComponent } from './buyer-home/buyer-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProfileComponent,
    ContactComponent,
    ShoppingCartComponent,
    SellerRegistrationComponent,
    RegisterComponent,
    FashionComponent,
    ElectronicsComponent,
    HousingComponent,
    ProfileComponent,
    RegisterComponent,
    SellerRegistrationComponent,
    MenComponent,
    FemaleComponent,
    KidsComponent,
    GadgetsComponent,
    LaptopsComponent,
    MachinesComponent,
    CheckoutComponent,
    EndpageComponent,
    AddCategoryComponent,
    ItemsPresentComponent,
    BuyerHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ItemsService,
            NewItemService,
          CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
