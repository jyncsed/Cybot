import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JsonReadService {

  private membersJson = 'assets/data/team-members.json';
  private welcomeSections = 'assets/data/welcome-page.json';
  constructor(private http: HttpClient) { }

  public getTeamMembers(): Observable<any> {
    return this.http.get(this.membersJson);
  }

  public getWelcomeSections(): Observable<any> {
    return this.http.get(this.welcomeSections);
  }
}
