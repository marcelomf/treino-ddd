import {describe, expect, test} from '@jest/globals';
import {Provider} from '../src/contexts/people/entities/provider';
import {Customer} from '../src/contexts/people/entities/customer';
import {Order} from '../src/contexts/sales/entities/order';
import {Genre} from '../src/contexts/people/vo/genre';
import { CustomerDTO } from '../src/contexts/people/dto/customer';
import { ProviderDTO } from '../src/contexts/people/dto/provider';
import { Complaint } from '../src/contexts/people/entities/complaint';
import { ComplaintDTO } from '../src/contexts/people/dto/complaint';

describe('provider entity', () => {
  test('rating provider', () => {
    const provider = new Provider(new ProviderDTO("Loja Cabulosa", new Date("1999-01-20")));
    provider.addOrder(new Order());
    provider.addOrder(new Order());
    provider.addOrder(new Order());
    provider.addOrder(new Order());
    provider.addOrder(new Order());
    const customer = new Customer(new CustomerDTO("Marcelo", new Date("1986-01-20"), Genre.MALE));
    customer.addOrder(new Order());
    customer.addOrder(new Order());
    customer.addOrder(new Order());


    expect(provider.totalOrders()).toBe(5);
    expect(customer.getRating()).toMatch(/VIP/);
  });

  test('provider complaints', () => {
    const providerDto = new ProviderDTO("Loja Cabulosa", new Date("1999-01-20"));
    const provider = new Provider(providerDto);
    const complaint = new Complaint(new ComplaintDTO(
      new CustomerDTO("Marcelo", new Date("1986-01-20"), Genre.MALE), 
      providerDto, 
      "Pedido veio estragado!"));

    const complaint2 = new Complaint(new ComplaintDTO(
      new CustomerDTO("Marcelo", new Date("1986-01-20"), Genre.MALE), 
      providerDto, 
      "Pedido veio estragado!"));
  
    const complaint3 = new Complaint(new ComplaintDTO(
      new CustomerDTO("Marcelo", new Date("1986-01-20"), Genre.MALE), 
      providerDto, 
      "Pedido veio estragado!"));

    provider.addComplaint(complaint);
    provider.addComplaint(complaint2);
    provider.addComplaint(complaint3);
    expect(() => provider.processSale(new Order())).toThrow("Provider can't be able to process sale. Excepted max numbers(3) of complaints!");
  });

});


