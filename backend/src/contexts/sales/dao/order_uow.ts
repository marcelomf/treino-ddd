import { Orm } from "../../../utils/persistence_db";
import { OrderDTO } from "../dto/order";
export class OrderUOW extends Orm {

    async saveDb(orderDto: OrderDTO) {
        const dataOrder = orderDto.toORM();

        await this.prisma.order.create({
            data: dataOrder
        });
    }
}