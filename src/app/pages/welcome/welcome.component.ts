import { Component, OnInit } from '@angular/core';
import { TeamMember } from 'src/app/models/team-member';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonReadService } from 'src/app/services/json-read.service';
import { WelcomeSection } from 'src/app/models/welcome-section';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  teamMembers: TeamMember[];
  welcomeSections: WelcomeSection[];
  constructor(private jsonRead: JsonReadService) { }

  ngOnInit() {
    this.teamMembers = [];
    this.welcomeSections = [];
    this.jsonRead.getTeamMembers().subscribe(data => {
      this.teamMembers = data.TeamMember;
    });

    this.jsonRead.getWelcomeSections().subscribe(data => {
      this.welcomeSections = data.WelcomeSections;
      console.log(this.welcomeSections);
    });

  }

}
