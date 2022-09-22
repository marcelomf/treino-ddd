import { PersistenceDb } from "../../../utils/persistence_db";
import { CustomerDAO } from "../dao/customer";
import { CustomerDTO } from "../dto/customer";

export class CustomerRepository implements PersistenceDb {
    
    saveDb(customerDto: CustomerDTO) {
        const customerDao = new CustomerDAO();
        customerDao.saveDb(customerDto);
    }

    deleteDb(customerId: string) {

    }

    findByIdDb(customerId: string) {
        return []
    }

    findAllDb() {
        return []
    }
    
    countDb() {
        return 0
    }
    
}