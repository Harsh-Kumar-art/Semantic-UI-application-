import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';//for using router-outlet in app component template
import { AppComponent } from './app.component';
// import { ElementsHomeComponent } from './elements/elements-home/elements-home.component';
//import {ElementsModule} from './elements/elements.module';|here importing module not component directly(component was exported from elements module)|deleted to implement lazy loading on elements module
// import {CollectionsModule} from './collections/collections.module'; //same as above
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
    // ElementsHomeComponent
  ],
  imports: [
    BrowserModule,
    //ElementsModule,// here importing above elements module
    // CollectionsModule,//same as above
    RouterModule//for above imported RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
