import { Component, OnInit } from '@angular/core';
import { NgxXml2jsonService } from 'ngx-xml2json';
import { JsonReadService } from 'src/app/services/json-read.service';
import { Products, Sections, Items } from 'src/app/models/products';
import { ListProduct } from 'src/app/models/list-product';
import { Droids } from 'src/app/models/droids';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  droids: Items[];
  products: any;
  droidList: ListProduct[];
  droid: Droids;
  constructor(private ngxXml2jsonService: NgxXml2jsonService, private jsonRead: JsonReadService) { }

  ngOnInit() {
    this.products = [];
    this.droids = [];
    this.droidList = [];
    this.jsonRead.getProducts().subscribe(data => {
      this.products = data;
      this.products.Sections.forEach(section => {
        if (section.type === 'droids') {
          this.droids = section;
          section.Items.forEach((item: any) => {
            this.jsonRead.getDroidInfo(item.itemID)
              .subscribe(droid => {
                const listProduct = new ListProduct();
                listProduct.price = item.price;
                listProduct.title = droid['types-entity'].name;
                listProduct.description = droid['types-entity'].description;
                listProduct.image = droid['types-entity'].images.large;
                this.droidList.push(listProduct);
              }
                , error => console.log('Error getting droid data from swc', error)

              )

          });
        }
      });
      this.products = data;
    },
      error => console.log('error', error));
    console.log(this.droidList);
  }

}
