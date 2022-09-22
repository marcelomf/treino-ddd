import { PersistenceDb, Orm } from "../../../utils/persistence_db";
import { CustomerDTO } from "../dto/customer";
export class CustomerDAO extends Orm implements PersistenceDb {

    async saveDb(customerDto: CustomerDTO) {
        await this.prisma.customer.create({
            data: customerDto.toORM()
        });
    }

    async deleteDb(customerId: string) {

    }

    async findByIdDb(customerId: string) {
        return []
    }

    async findAllDb() {
        return await this.prisma.customer.findMany();
    }
    
    async countDb() {
        return await this.prisma.customer.count();
    }

}