import { Component, OnInit, Input } from '@angular/core';
import { ListProduct } from 'src/app/models/list-product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {
  @Input() listProduct: ListProduct;
  constructor() { }

  ngOnInit() {
  }

}
