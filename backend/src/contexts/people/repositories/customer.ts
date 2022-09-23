import { CustomerDAO } from "../dao/customer";
import { CustomerDTO } from "../dto/customer";

export class CustomerRepository {

    customerDao: CustomerDAO = new CustomerDAO();
    
    async saveDb(customerDto: CustomerDTO) {
        await this.customerDao.saveDb(customerDto);
    }

    async removeDb(customerId: string) {
        await this.customerDao.removeDb(customerId);
    }

    async findByIdDb(customerId: string): Promise<CustomerDTO> {
        return await this.customerDao.findByIdDb(customerId) as unknown as CustomerDTO;
    }

    async findAllDb(): Promise<CustomerDTO[]> {
        let result = await this.customerDao.findAllDb() as unknown as CustomerDTO[];
        return result;
    }
    
    async countDb() {
        return await this.customerDao.countDb();
    }
    
}