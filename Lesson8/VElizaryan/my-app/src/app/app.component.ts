import { Component } from '@angular/core';
import { ListComponent } from '../app/components/list/list.component';
import {Item} from "./interfaces/item";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'To-Do lists';

  items: Item[] = [
    { title: 'Купить молоко', done: false },
    { title: 'Еды коту', done: true }
  ];

  addItem(newItem: string) {
    this.items.unshift({ title: newItem, done: false });
  }
}
