import { Component, OnInit } from '@angular/core';
import { JsonReadService } from 'src/app/services/json-read.service';
import { Item } from 'src/app/models/item';
import { Droids } from 'src/app/models/droids';

@Component({
  selector: 'app-droids',
  templateUrl: './droids.component.html',
  styleUrls: ['./droids.component.scss']
})
export class DroidsComponent implements OnInit {
  item: Item;
  droid: Droids;
  constructor(private jsonRead: JsonReadService) { }

  ngOnInit() {
    this.jsonRead.getItemInfo('12:2').subscribe(data => {
      this.item = data;
      console.log(data);
      console.log(this.item);
    },
      error => {
        console.log(error);
      }
    );

    this.jsonRead.getDroidInfo('13:12').subscribe(data => {
      this.droid = data;
      console.log(data);
      console.log(this.droid);
    },
      error => {
        console.log(error);
      }
    );
  }

}
