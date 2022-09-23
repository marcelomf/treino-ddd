import { PersistenceDb, Orm } from "../../../utils/persistence_db";
import { CustomerDTO } from "../dto/customer";
export class CustomerDAO extends Orm implements PersistenceDb {

    async saveDb(customerDto: CustomerDTO) {
        return await this.prisma.customer.create({
            data: customerDto.toORM(),
            include: {
                addresses: true
            }
        });
    }

    async removeDb(customerId: string) {
        return await this.prisma.customer.delete({
            where:{
                id: customerId
            },
            include: {
                addresses: true
            }
        })
    }

    async findByIdDb(customerId: string) {
        return await this.prisma.customer.findUnique({
            where: {
                id: customerId
            },
            include: {
                addresses: true
            }
        })
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