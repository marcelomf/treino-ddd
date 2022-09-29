import { PersistenceDb, Orm } from "../../../utils/persistence_db";
import { CustomerDTO } from "../dto/customer";
export class CustomerDAO extends Orm implements PersistenceDb {

    async saveDb(customerDto: CustomerDTO) {
        const dataCustomer = customerDto.toORM();
        dataCustomer.addresses = { create: dataCustomer.addresses };
        dataCustomer.orders = { create: dataCustomer.orders };
        dataCustomer.complaints = { create: dataCustomer.complaints };

        return await this.prisma.provider.create({
            data: customerDto.toORM(),
            include: {
                addresses: true
            }
        });
    }

    async removeDb(customerId: string) {
        return await this.prisma.provider.delete({
            where:{
                id: customerId
            },
            include: {
                addresses: true
            }
        })
    }

    async findByIdDb(customerId: string) {
        return await this.prisma.provider.findUnique({
            where: {
                id: customerId
            },
            include: {
                addresses: true
            }
        })
    }

    async findAllDb() {
        return await this.prisma.provider.findMany({
            include: {
                addresses: true
            }
        });
    }
    
    async countDb() {
        return await this.prisma.provider.count();
    }

}