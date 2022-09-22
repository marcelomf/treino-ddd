import { CustomerDAO } from "../dao/customer";
import { CustomerDTO } from "../dto/customer";

export class CustomerRepository {

    customerDao: CustomerDAO = new CustomerDAO();
    
    async saveDb(customerDto: CustomerDTO) {
        await this.customerDao.saveDb(customerDto);
    }

    async deleteDb(customerId: string) {

    }

    async findByIdDb(customerId: string) {
        return []
    }

    async findAllDb() {
        let result = await this.customerDao.findAllDb() as unknown as CustomerDTO[];
        return result;
    }
    
    async countDb() {
        return await this.customerDao.countDb();
    }
    
}