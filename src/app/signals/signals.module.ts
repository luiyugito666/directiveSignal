import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignalsRoutingModule } from './signals-routing.module';
import { SignalsLayoutComponent } from './layouts/signals-layout/signals-layout.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';



@NgModule({
  declarations: [
    
    SignalsLayoutComponent,
         CounterPageComponent,
         UserPageComponent,
         PropertiesPageComponent,
         SideMenuComponent,
         
  ],
  imports: [
    CommonModule,
    SignalsRoutingModule
  ]
})
export class SignalsModule { }
