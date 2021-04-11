import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent {
  itemName: string;

  @Output() onAddItem: EventEmitter<string> = new EventEmitter<string>();

  addItem(): void {
    this.onAddItem.emit(this.itemName);

    this.itemName = '';
  }
}
