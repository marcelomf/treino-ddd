import {OrderItem} from './order_item';

export class Order {
    protected id?: string;
    protected items?: OrderItem[];

    constructor() {

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