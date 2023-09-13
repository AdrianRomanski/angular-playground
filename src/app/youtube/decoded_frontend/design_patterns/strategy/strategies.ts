export interface DiscountStrategy {
  calculate(price: number): number;
}

export class SeasonalDiscountStrategy implements DiscountStrategy{
  calculate(price: number): number {
    return price - (price * 0.1);
  }
}

export class PersonalDiscountStrategy implements DiscountStrategy{
  calculate(price: number): number {
    return price - (price * 0.2);
  }
}
