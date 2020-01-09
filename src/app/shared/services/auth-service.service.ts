import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, pipe, throwError } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import decode from 'jwt-decode';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';
import { environment } from 'src/environments/environment';
import { UserAuthentication } from '../../models/user-authentication';
import { Authenticaion } from '../../models/authenticaion';
import { JwtHelperService } from '@auth0/angular-jwt';
import { RoutingPath } from '../constants/routing-path';
import { AlertService } from 'src/app/modules/alerts/alert.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private helper = new JwtHelperService();
  private token = localStorage.getItem('token');

  get isTokenExpired() {
    return this.helper.isTokenExpired(this.token);
  }

  get userRole() {
    const tokenDecoded = this.helper.decodeToken(this.token);
    return tokenDecoded.role;
  }

  constructor(private router: Router, private http: HttpClient, private alerts: AlertService) { }

  clear() {
    this.token = '';
    localStorage.clear();
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('token') != null && !this.isTokenExpired;
  }

  login(userAuthentication: UserAuthentication) {
    this.http
      .post<Authenticaion>(
        environment.baseAPIUrl + 'users/authenticate/',
        userAuthentication
      )
      .subscribe(
        data => {
          if (data) {
            localStorage.setItem('token', data.token);
            this.token = data.token;
            this.router.navigate([RoutingPath.Home]);
          }
        },
        err => {
          if (err.status === 400) {
            this.alerts.error('Username or Password is incorrect');
          } else {
            this.alerts.error(err.message);
          }
          console.log(err);
        }
      );
  }

  logout() {
    this.clear();
    this.router.navigate([RoutingPath.Home]);
  }

  getToken() {
    return this.token;
  }

  getUsers(): Observable<any> {
    return this.http.get<User[]>(environment.baseAPIUrl + 'users');
  }
}
