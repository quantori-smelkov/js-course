import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor(
    private readonly activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(
      ({id}) => console.log(id)
    );
    activatedRoute.queryParams.subscribe(
      ({product, price}) => console.log(product, price)
    );
  }
  ngOnInit(): void {
  }
}
