import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import {TitleModule} from '../title/title.module';
import {ButtonsModule} from '../buttons/buttons.module';
import {ListModule} from '../list/list.module';
import {FormsModule} from '@angular/forms';



@NgModule({
    declarations: [TodoComponent],
    exports: [
        TodoComponent
    ],
  imports: [
    CommonModule,
    TitleModule,
    ButtonsModule,
    ListModule,
    FormsModule
  ]
})
export class TodoModule { }
