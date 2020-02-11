import { Component, OnInit } from '@angular/core';
import { NgxXml2jsonService } from 'ngx-xml2json';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  showDroids = false;
  showItems = false;
  showShips = false;
  showVehicle = false;
  showWeapons = false;

  constructor(private ngxXml2jsonService: NgxXml2jsonService) { }

  ngOnInit() {

  }
  showDroidPage() {
    this.showDroids = true;
    this.showItems = false;
    this.showShips = false;
    this.showVehicle = false;
    this.showWeapons = false;
  }
  showItemsPage() {
    this.showDroids = false;
    this.showItems = true;
    this.showShips = false;
    this.showVehicle = false;
    this.showWeapons = false;
  }
  showShipsPage() {
    this.showDroids = false;
    this.showItems = false;
    this.showShips = true;
    this.showVehicle = false;
    this.showWeapons = false;
  }
  showVehiclesPage() {
    this.showDroids = false;
    this.showItems = false;
    this.showShips = false;
    this.showVehicle = true;
    this.showWeapons = false;
  }
  showWeaponsPage() {
    this.showDroids = false;
    this.showItems = false;
    this.showShips = false;
    this.showVehicle = false;
    this.showWeapons = true;
  }
  showSpecialsPage() {
    this.showDroids = false;
    this.showItems = false;
    this.showShips = false;
    this.showVehicle = false;
    this.showWeapons = true;
  }
}
