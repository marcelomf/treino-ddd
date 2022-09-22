import {describe, expect, test} from '@jest/globals';
import { Customer } from '../src/contexts/people/entities/customer';
import { Order } from '../src/contexts/sales/entities/order';
import { Genre } from '../src/contexts/people/vo/genre';

describe('customer entity', () => {
  test('rating customer', () => {
    const customer = new Customer("Marcelo", new Date("1986-01-20"), Genre.MALE);
    customer.addOrder(new Order());
    customer.addOrder(new Order());
    customer.addOrder(new Order());
    expect(customer.totalOrders()).toBeGreaterThanOrEqual(3);
    expect(customer.getRating()).toMatch(/VIP/);
  });

  test('customer over 18 years old', () => {
    expect(() => new Customer("Marcelinho Junior", new Date("2021-01-20"), Genre.MALE, true) ).toThrow("Operation only available to persons over 18 years of age.");
  });

});


