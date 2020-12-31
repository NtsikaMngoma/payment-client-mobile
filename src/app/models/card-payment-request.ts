import { Customer } from './customer';
import { Redirect } from './redirect';
import { Order } from './order';

export class CardPaymentRequest {
    account: Account;
    budgetPeriod: number;
    cardExpiryDate: string;
    cardNumber: string;
    customer: Customer;
    cvv: string;
    redirect: Redirect;
    order: Order;
}

