import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ElementsHomeComponent} from './elements-home/elements-home.component';//config for routing
const routes: Routes = [
  {path:'',component:ElementsHomeComponent}//config for routing & as app module importing complete elements module it will also import this routing module.ts
  //now component is visible on elements address
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule { }
