import {describe, expect, test} from '@jest/globals';
import {Order} from '../src/contexts/sales/entities/order';
import {OrderItem} from '../src/contexts/sales/entities/order_item';

describe('order entity', () => {
  test('total price of order', () => {
    const order = new Order();
    order.addItem(new OrderItem("Salgado", 15));
    order.addItem(new OrderItem("Refrigerante", 10));
    order.addItem(new OrderItem("Bombom", 5));
    expect(order.totalPrice()).toBe(30);
  });
});


