import { Component, OnInit } from '@angular/core';
import { TropipayService } from '../tropipay.service';

@Component({
  selector: 'app-cli',
  templateUrl: './cli.component.html',
  styleUrls: ['./cli.component.scss']
})
export class CliComponent implements OnInit {

  user: any;

  constructor(
    private srv: TropipayService
  ) {
    const msg = 'you need to connect with TropiPay first!';
    this.user = {
      email: msg,
      name: msg,
      balance: msg
    }
  }

  ngOnInit(): void {
    this.srv.event.subscribe(event => {
      if (event.action === 'get_profile') {
        this.user = event.data;
      }
    })
  }

}
