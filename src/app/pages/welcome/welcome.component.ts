import { Component, OnInit } from '@angular/core';
import { TeamMember } from 'src/app/models/team-member';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  teamMembers: TeamMember[];

  constructor() { }

  ngOnInit() {
    this.teamMembers = [];
    const temp = new TeamMember();
    temp.name = 'Dex Sherin';
    temp.title = 'CEO Cybot Galactica Chairman of the Galactica Group';
    temp.image = 'https://storage.googleapis.com/wzukusers/user-34886327/images/5e12657b38cf6tkk2osu/DexAvatarSmall.png'
    this.teamMembers.push(temp);
  }

}
