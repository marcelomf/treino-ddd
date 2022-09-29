import { OrderDTO } from '../dto/order';
import { OrderItemDTO } from '../dto/order_item';
import {OrderItem} from './order_item';

export class Order {
    protected id?: string;
    protected items?: OrderItem[];

    constructor(orderDto: OrderDTO) {
        this.id = orderDto?.id;
        this.items = orderDto?.items as unknown[] as OrderItem[];
    }

    toDto() {
        const orderDto = new OrderDTO();
        orderDto.id = this.id;
        orderDto.items = this.items as unknown[] as OrderItemDTO[];
        return orderDto;
    }

    addItem(orderItem: OrderItem){
        if(!this.items) this.items = []
        this.items.push(orderItem)
    }

    totalPrice() {
        let totalPrice = 0;
        if(!this.items) return totalPrice;
        for(const item of this.items) {
            totalPrice += item.getPrice();
        }
        return totalPrice;
    }
}