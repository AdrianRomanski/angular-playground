import {PaymentProvider, PayPalProvider} from "./implementation";

export abstract  class Payment {

  protected  provider: PaymentProvider;

  protected constructor(provider: PayPalProvider) {
    this.provider = provider;
  }

  pay() {
    this.provider.execPayment();
  }
}

export class OneTimePayment extends Payment {}

export class SubscriptionPayment extends Payment {
  override pay() {
    super.pay();
    console.log('Set next payment');
  }
}


