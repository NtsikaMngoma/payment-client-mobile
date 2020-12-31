import { Component, OnInit } from '@angular/core';
import { CardPaymentRequest } from '../models/card-payment-request';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  data: CardPaymentRequest
  constructor(public service: ApiService, public router: Router) {
    this.data = new CardPaymentRequest();
   }

  ngOnInit() {
  }

  payNow() {
    this.service.payNow(this.data).subscribe((response) => {
      this.router.navigate(['payments']);
    })
  }

}
