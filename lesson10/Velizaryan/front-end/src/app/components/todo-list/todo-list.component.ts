import { Item } from './../interfaces/item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  items: Item[] = [
    { name: 'Купить хлеб', isDone: true },
    { name: 'Купить молоко', isDone: false },
  ];

  constructor() { }

  addItem(name: string): void {
    this.items.push({
      name,
      isDone: false
    });
  }
}
