import { Order } from "../entities/order";

export class OrderDto extends Order {
    fromORM(dataOrderItem: any) {
        this.id = dataOrderItem.id;
        this.items = dataOrderItem.items || [];
    }

    toORM() {
        return {
            id: this.id,
            items: this.items || []
        }
    }

    fromUI(dataOrder: any) {
        this.id = dataOrder.id;
        this.items = dataOrder.items || [];
    }

    toUI() {
        return {
            id: this.id,
            items: this.items || []
        }
    }
}