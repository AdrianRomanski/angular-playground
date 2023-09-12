export interface PaymentProvider {
  execPayment(): void;
}

export class PayPalProvider implements PaymentProvider{
  execPayment() {
    console.log('Call PayPal API')
  }
}

export class ApplePayProvider implements PaymentProvider{
    execPayment() {
    console.log('Call ApplePay API')
  }
}
