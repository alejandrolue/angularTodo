import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import {ButtonsModule} from '../buttons/buttons.module';
import {FormsModule} from '@angular/forms';



@NgModule({
    declarations: [ListComponent],
    exports: [
        ListComponent
    ],
  imports: [
    CommonModule,
    ButtonsModule,
    FormsModule
  ]
})
export class ListModule { }
