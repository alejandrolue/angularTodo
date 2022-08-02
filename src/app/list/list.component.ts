import {Component, Input, OnInit} from '@angular/core';
import {List, TodoComponent} from '../todo/todo.component';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() data: List[] = [];
  @Input() edit: boolean;
  index: any;


  constructor(
    private todoComponent: TodoComponent
  ) { }

  ngOnInit(): void {
    this.todoComponent.checkIfEmpty();
  }

  setChecked(id): void {
    this.data[id].checked = !this.data[id].checked;
    console.log(this.data);
    console.log(this.data[id].checked);
    this.todoComponent.checkIfAlreadyDone();
  }

  onChange(input, id): void {
    this.data[id].todo = input;
    console.log(input);
  }

  // tslint:disable-next-line:typedef
  delete(id: number) {
    console.log(id);
    console.log(this.data);
    this.data.splice(id);
    this.todoComponent.checkIfEmpty();
  }

}
