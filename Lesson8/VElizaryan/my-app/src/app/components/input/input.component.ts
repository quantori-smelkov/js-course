import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  constructor() { }
  login: string;

  @Output() newItemEvent = new EventEmitter<string>();

  ngOnInit(): void {
  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }
}
