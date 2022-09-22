import { PersistenceDb, Orm } from "../../../utils/persistence_db";
import { CustomerDTO } from "../dto/customer";
export class CustomerDAO extends Orm implements PersistenceDb {

    async saveDb(customerDto: CustomerDTO) {
        await this.prisma.customer.create({
            data: customerDto.toORM(),
            include: {
                addresses: true
            }
        });
    }

    async deleteDb(customerId: string) {

    }

    async findByIdDb(customerId: string) {
        return []
    }

    async findAllDb() {
        return await this.prisma.customer.findMany({
            include: {
                addresses: true
            }
        });
    }
    
    async countDb() {
        return await this.prisma.customer.count();
    }

}