import { OrderItem } from "../entities/order_item";

export class OrderItemDto extends OrderItem {
    fromORM(dataOrderItem: any) {
        this.id = dataOrderItem.id;
        this.name = dataOrderItem.name;
        this.price = dataOrderItem.price;
    }

    toORM() {
        return {
            id: this.id,
            name: this.name,
            price: this.price
        }
    }

    fromUI(dataOrderItem: any) {
        this.id = dataOrderItem.id;
        this.name = dataOrderItem.name;
        this.price = dataOrderItem.price;
    }

    toUI() {
        return {
            id: this.id,
            name: this.name,
            price: this.price
        }
    }
}