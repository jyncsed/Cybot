import { Component, OnInit } from '@angular/core';
import { Faction } from 'src/app/models/faction';
import { JsonReadService } from 'src/app/services/json-read.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  faction: Faction;
  factionName: string;
  factionDescription: string;
  constructor(private jsonRead: JsonReadService) { }

  ngOnInit() {
    this.jsonRead.getGFactionInfo().subscribe(data => {
      this.faction = data.faction;
      this.factionName = this.faction.name;
      this.factionDescription = this.faction.description;
    },
      error => {
        console.log(error);
      }
    );
  }

}
