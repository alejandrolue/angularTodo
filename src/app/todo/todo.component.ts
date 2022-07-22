import { Component, OnInit } from '@angular/core';


export interface List {
  todo: string;
  checked: boolean;
}

const LIST_DATA: List[] = [
  {todo: 'test 1', checked: false},
  {todo: 'test 2', checked: false}
];



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todo: List[] = LIST_DATA;
  input: string;
  disabled: boolean;
  edit = true;
  text: string;

  constructor() { }

  ngOnInit(): void {
    this.checkIfEmpty();
    this.enableEdit();
  }

  enableEdit(): void {
    this.edit = !this.edit;
    if (this.edit === true) {
      this.text = 'cancel';
    } else {
      this.text = 'edit';
    }
  }

  checkIfEmpty(): boolean {
    if ( this.todo.length === 0 ) {
      this.disabled = true;
      console.log(this.disabled);
      return true;
    } else {
      console.log('All good');
      this.disabled = false;
      console.log(this.disabled);
      return true;
    }
  }

  add(): void {
    this.todo.push({todo: this.input, checked: false});
    this.checkIfEmpty();
    this.input = '';
  }

  clearList(): void {
    this.todo = [];
    this.checkIfEmpty();
    console.log(this.todo.length);
  }

}
