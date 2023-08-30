import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalsLayoutComponent } from './layouts/signals-layout/signals-layout.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';


const routes: Routes = [
  {  
    path:'',
    component:SignalsLayoutComponent,
    children: [
      {path:'counter', component: CounterPageComponent},
      {path:'user-info', component: UserPageComponent},
      { path: 'properties', component: PropertiesPageComponent },
      {path:'**', redirectTo:'counter'}
        
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignalsRoutingModule { }
