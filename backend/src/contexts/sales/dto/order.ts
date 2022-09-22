import { OrderItemDTO } from "./order_item";
export class OrderDTO {

    id?: string;
    items?: OrderItemDTO[];

    static fromORM(dataOrder: any) {
        const orderDto = new OrderDTO();
        orderDto.id = dataOrder.id;
        orderDto.items = dataOrder.items || [];
        return orderDto;
    }

    toORM() {
        return {
            id: this.id,
            items: this.items || []
        }
    }

    static fromUI(dataOrder: any) {
        const orderDto = new OrderDTO();
        orderDto.id = dataOrder.id;
        orderDto.items = dataOrder.items || [];
        return orderDto;
    }

    toUI() {
        return {
            id: this.id,
            items:this.items || []
        }
    }
}