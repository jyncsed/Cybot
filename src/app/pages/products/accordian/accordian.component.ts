import { Component, OnInit, Input } from '@angular/core';
import { ListProduct } from 'src/app/models/list-product';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.scss']
})
export class AccordianComponent implements OnInit {
  @Input() title: string;
  @Input() listProducts: ListProduct[];
  constructor() { }

  ngOnInit() {
  }

}
