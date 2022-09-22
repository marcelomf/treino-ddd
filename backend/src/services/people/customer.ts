import { Customer } from "../../contexts/people/entities/customer";
import { CustomerDTO } from "../../contexts/people/dto/customer";
import { CustomerRepository } from "../../contexts/people/repositories/customer";

export class CustomerService {
    static async save(dataCustomerUI: any) {
        const customerDto = CustomerDTO.fromUI(dataCustomerUI);
        const customer = new Customer(customerDto);
        const customerRepository = new CustomerRepository();
        customerRepository.saveDb(customer.toDto());
        return true;
    }

    static async remove(customerParams: any) {
        const customerRepository = new CustomerRepository();
        customerRepository.deleteDb(customerParams.id);
        return true;
    }

    static async findById(customerParams: any) {

    }
    
    static async findAll() {

    }

    static async count() {

    }
}