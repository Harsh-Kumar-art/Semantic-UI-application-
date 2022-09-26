import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
const routes: Routes=[
    {path:'elements',loadChildren:()=>import('./elements/elements.module').then((m)=>m.ElementsModule)},//for lazy loading
    {path:'collections',loadChildren:()=>import('./collections/collections.module').then((m)=>m.CollectionsModule)},//for lazy loading
    {path:'views',loadChildren:()=>import('./views/views.module').then((m)=>m.ViewsModule)},//for lazy loading
    {path:'mods',loadChildren:()=>import('./mods/mods.module').then((m)=>m.ModsModule)},//for lazy loading
    {path:'',component:HomeComponent} ,
    {path:'**',component:NotFoundComponent}      //empty string in path means homepage
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule {}