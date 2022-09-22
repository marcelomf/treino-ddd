import {describe, expect, test} from '@jest/globals';
import { Customer } from '../src/contexts/people/entities/customer';
import { Order } from '../src/contexts/sales/entities/order';
import { Genre } from '../src/contexts/people/vo/genre';
import { CustomerDTO } from '../src/contexts/people/dto/customer_dto';

describe('customer entity', () => {
  test('rating customer', () => {
    const customer = new Customer(new CustomerDTO("Marcelo", new Date("1986-01-20"), Genre.MALE));
    customer.addOrder(new Order());
    customer.addOrder(new Order());
    customer.addOrder(new Order());
    expect(customer.totalOrders()).toBeGreaterThanOrEqual(3);
    expect(customer.getRating()).toMatch(/VIP/);
  });

  test('customer over 18 years old', () => {
    const customerDto = new CustomerDTO("Marcelinho Junior", new Date("2021-01-20"), Genre.MALE);
    customerDto.only18Plus = true;
    expect(() => new Customer(customerDto) ).toThrow("Operation only available to persons over 18 years of age.");
  });

});


