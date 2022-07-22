import {Component, Input, OnInit} from '@angular/core';
import {List} from '../todo/todo.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() data: List[] = [];
  @Input() edit: boolean;
  index: any;
  newInput: string;

  constructor() { }

  ngOnInit(): void {
  }

  onChange(id): void {
    this.index = id;
    console.log(this.index);
  }

  delete(index): void {
    console.log(index);
    this.data.splice(this.data.indexOf(index.todo) );

  }

}
