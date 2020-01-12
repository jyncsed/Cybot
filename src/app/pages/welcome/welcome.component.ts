import { Component, OnInit } from '@angular/core';
import { TeamMember } from 'src/app/models/team-member';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  private _jsonUrl = 'assets/data/team-members.json';
  teamMembers: TeamMember[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.teamMembers = [];
    this.getJSON().subscribe(data => {
      this.teamMembers = data.TeamMember;
    });
  }
  public getJSON(): Observable<any> {
    return this.http.get(this._jsonUrl);
  }
}
