import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JsonReadService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '/',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    })
  };

  private membersJson = 'assets/data/team-members.json';
  private welcomeSections = 'assets/data/welcome-page.json';
  private products = 'assets/data/products.json';

  constructor(private http: HttpClient) { }

  public getTeamMembers(): Observable<any> {
    return this.http.get(this.membersJson);
  }

  public getWelcomeSections(): Observable<any> {
    return this.http.get(this.welcomeSections);
  }

  public getProducts(): Observable<any> {
    return this.http.get(this.products);
  }

  public getGFactionInfo(): Observable<any> {


    const headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, TOKEN');
    return this.http.get(encodeURI('https://cors-anywhere.herokuapp.com/http://www.swcombine.com/ws/v1.0/faction/20:580'), { headers });
  }

  public getItemInfo(uuid: string): Observable<any> {
    const headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, TOKEN');
    return this.http.get(encodeURI('https://cors-anywhere.herokuapp.com/http://www.swcombine.com/ws/v1.0/types/items/' + uuid),
      { headers });
  }

  public getDroidInfo(uuid: string): Observable<any> {
    const headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, TOKEN');
    return this.http.get(encodeURI(`https://cors-anywhere.herokuapp.com/http://www.swcombine.com/ws/v1.0/types/droids/${uuid}`),
      { headers });
  }
}
