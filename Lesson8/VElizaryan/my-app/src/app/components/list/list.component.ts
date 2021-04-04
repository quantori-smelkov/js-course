import {Component, Input, OnInit} from '@angular/core';
import { Item } from 'src/app/interfaces/item';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() items: Item[];

  constructor() { }

  ngOnInit(): void {
  }
}
