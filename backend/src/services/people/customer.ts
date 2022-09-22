import { Customer } from "../../contexts/people/entities/customer";
import { CustomerDTO } from "../../contexts/people/dto/customer";
import { CustomerRepository } from "../../contexts/people/repositories/customer";

export class CustomerAppService {
    static async save(dataCustomerUI: any) {
        const customerDto = CustomerDTO.fromUI(dataCustomerUI);
        const customer = new Customer(customerDto);
        const customerRepository = new CustomerRepository();
        customerRepository.saveDb(customer.toDto());
    }

    static async remove(customerParams: any) {
        const customerRepository = new CustomerRepository();
        customerRepository.deleteDb(customerParams.id);
    }

    static async findById(customerParams: any) {

    }
    
    static async findAll() {

    }

    static async count() {
        const customerRepository = new CustomerRepository();
        return await customerRepository.countDb();
    }
}