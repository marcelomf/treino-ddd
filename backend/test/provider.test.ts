import {describe, expect, test} from '@jest/globals';
import {Provider} from '../src/contexts/people/entities/provider';
import {Customer} from '../src/contexts/people/entities/customer';
import {Order} from '../src/contexts/sales/entities/order';
import {Genre} from '../src/contexts/people/vo/genre';

describe('provider entity', () => {
  test('rating provider', () => {
    const provider = new Provider("Loja Cabulosa", new Date("1999-01-20"));
    const customer = new Customer("Marcelo", new Date("1986-01-20"), Genre.MALE);
    customer.addOrder(new Order());
    customer.addOrder(new Order());
    customer.addOrder(new Order());

    const customer2 = new Customer("Valentina", new Date("2011-09-15"), Genre.FEMALE);
    customer2.addOrder(new Order());

    const customer3 = new Customer("Carol", new Date("1994-01-15"), Genre.FEMALE);
    customer3.addOrder(new Order());

    provider.addCustomer(customer);
    provider.addCustomer(customer2);
    provider.addCustomer(customer3);

    expect(provider.totalOrders()).toBe(5);
    expect(customer.getRating()).toMatch(/VIP/);
  });

  test('customer over 18 years old', () => {
    const provider = new Provider("Loja Cabulosa", new Date("1999-01-20"));
    provider.addComplaint(new Customer("Marcelo", new Date("1986-01-20"), Genre.MALE), "Pedido veio estragado!");
    provider.addComplaint(new Customer("Valentina", new Date("2011-09-15"), Genre.FEMALE), "Pedido veio estragado!");
    provider.addComplaint(new Customer("Carol", new Date("1994-01-15"), Genre.FEMALE), "Pedido veio estragado!");
    expect(() => provider.processSale()).toThrow("Provider can't be able to process sale. Excepted numbers(3) of complaints!");
  });

});


