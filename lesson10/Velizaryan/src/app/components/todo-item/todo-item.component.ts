import {Component, Input} from '@angular/core';
import { Item } from '../interfaces/item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent  {
  @Input() item: Item;
  constructor() { }


}
