import { Component, OnInit } from '@angular/core';
import { TropipayService } from '../tropipay.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import * as qs from 'qs';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {

  title = 'TropiPay';
  constructor(
    private srv: TropipayService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  conect() {
    this.srv.getCredenctial().subscribe(event => {
      console.log("Connect TropiPay Credential", event.data);

      if(event.action === 'get_apikey'){
        this.srv.getUserProfile(event.data['access_token']).subscribe(event => {
          if(event.action === 'get_profile'){
            console.log("Connect TropiPay User", event.data);
          }
        });
      }
    });
  }

  conect2() {
    const url_tropipay = "https://tropipay-dev.herokuapp.com";

    const oauth_authorize = url_tropipay + '/api/v2/access/authorize';
    const oauth_token = url_tropipay + '/api/v2/access/token';
    //...................................................... Credentials (Menu > Seguridad > APP y Credenciales)
    const client_id = "cf33a19425421dcdfc82d26af3b126d0";
    const client_secret = "4a7eb4562e21eca14b9318d685950e3e";
    //...................................................... Options
    const redirect_uri = "http://localhost:5000/oauth/response";
    const scope = "ALLOW_GET_PROFILE_DATA ALLOW_GET_BALANCE";
    //...................................................... Security Basic [OPTIONAL]
    const state = "abcd-1234";
    //...................................................... Security PKCE [OPTIONAL]
    const code_verifier = "1234-abcd-1234";
    const code_challenge = "N2_wPQ7X9iP5bKXcw05rqHw1S7OwFuU4Nqi6ccr_LEs";
    const code_challenge_method = "S256";

    const param = qs.stringify({
      response_type: "code",
      client_id,
      client_secret,
      redirect_uri,
      code_challenge,
      code_challenge_method,
      state,
      scope
    });
    window.location.href = oauth_authorize + "?" + param;
  }
}
