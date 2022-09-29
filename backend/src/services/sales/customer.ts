import { Customer } from "../../contexts/sales/entities/customer";
import { CustomerDTO } from "../../contexts/sales/dto/customer";
import { CustomerRepository } from "../../contexts/sales/repositories/customer";

export class CustomerAppService {
    static async save(dataCustomerUI: any) {
        const customerDto = CustomerDTO.fromUI(dataCustomerUI);
        const customer = new Customer(customerDto);
        const customerRepository = new CustomerRepository();
        await customerRepository.saveDb(customer.toDto());
    }

    static async remove(customerParams: any) {
        const customerRepository = new CustomerRepository();
        await customerRepository.removeDb(customerParams.id);
    }

    static async findById(customerParams: any) {
        const customerRepository = new CustomerRepository();
        return await customerRepository.findByIdDb(customerParams.id);
    }
    
    static async findAll() {
        const customerRepository = new CustomerRepository();
        return await customerRepository.findAllDb();
    }

    static async count() {
        const customerRepository = new CustomerRepository();
        return await customerRepository.countDb();
    }
}