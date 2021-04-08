import { Component } from '@angular/core';
import { Item } from '../interfaces/item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  constructor() { }
  items: Item[] = [
    {name: 'Купи хлеб', isDone: true},
    {name: 'Купи молоко', isDone: false}
    ];

  addItemFromList(name: string): void {
    this.items.push({name, isDone: false});
    console.log(name);
  }
}
