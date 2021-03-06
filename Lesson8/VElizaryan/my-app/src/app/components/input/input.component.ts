import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  constructor() { }
  example: string = 'new to-do item';

  @Output() newItemEvent = new EventEmitter<string>();

  ngOnInit(): void {
  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
