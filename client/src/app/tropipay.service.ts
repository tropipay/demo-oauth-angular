import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
// https://tpp.stoplight.io/docs/tropipay-api-doc/ZG9jOjE4Njc1NzYz-integration-intro

interface Token {
  access_token?: string;
  refresh_token?: string;
  token_type?: string;
  expires_in?: number;
}

interface Event {
  action?: string;
  data?: any;
}

@Injectable({
  providedIn: 'root'
})
export class TropipayService {

  url: any;
  token: Token = {};
  event: EventEmitter<Event> = new EventEmitter();

  constructor(private http: HttpClient) {
    this.url = {
      base: "/",
      apikey: "api/v1/security/oauth/apikey",
      profile: "api/v1/profile"
    }
  }

  getCredenctial(): EventEmitter<Event> {
    this.http.get<Token>(this.url.base + this.url.apikey)
      .subscribe((res: Token) => {
        this.token = res;
        this.event.emit({ action: 'get_apikey', data: res });
      });
    return this.event;
  }

  getUserProfile(token: any) {
    const headers = { token };
    console.log('getUserProfile-headers', headers);
    this.http.get(this.url.base + this.url.profile, { headers })
      .subscribe((res: any) => {
        this.token = res;
        this.event.emit({ action: 'get_profile', data: res });
      });
    return this.event;
  }
}
