import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CollectionsHomeComponent} from './collections-home/collections-home.component';//importing home component
import {BiographyComponent} from './biography/biography.component';
import {CompaniesComponent} from './companies/companies.component';
import {PartnersComponent} from './partners/partners.component';
const routes: Routes = [
  {path:'',component:CollectionsHomeComponent,
      children:[
        {path:'',component:BiographyComponent},
        {path:'companies',component:CompaniesComponent},
        {path:'partners',component:PartnersComponent}
      ]}//config for routing
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule { }
