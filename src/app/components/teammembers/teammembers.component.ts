import { Component, OnInit, Input } from '@angular/core';
import { TeamMember } from 'src/app/models/team-member';

@Component({
  selector: 'app-teammembers',
  templateUrl: './teammembers.component.html',
  styleUrls: ['./teammembers.component.scss']
})
export class TeammembersComponent implements OnInit {
  @Input() teamMember: TeamMember;

  constructor() { }

  ngOnInit() {
    console.log('Team Member', this.teamMember);
  }

}
