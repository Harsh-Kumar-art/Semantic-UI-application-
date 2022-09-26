import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { TimesDirective } from './times.directive';
import { from } from 'rxjs';
import { SegmentComponent } from './segment/segment.component';


@NgModule({
  declarations: [
    ElementsHomeComponent,
    PlaceholderComponent,
    TimesDirective,
    SegmentComponent
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    SharedModule
  ],
  exports: []//exporting component to app module to show it on the screen and importing as a complete module in app module
})
export class ElementsModule { }
