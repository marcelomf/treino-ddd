import { PersistenceDb } from "../../../utils/persistence_db";
import { CustomerDTO } from "../dto/customer";

export class CustomerDAO implements PersistenceDb {

    saveDb(customerDto: CustomerDTO) {

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