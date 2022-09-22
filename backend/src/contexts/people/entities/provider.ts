import { Person } from './person';
import { Customer } from './customer';
import { CustomerService } from './customer_service';
import { Order } from '../../sales/entities/order';
import { ProviderDTO } from '../dto/provider';

export class Provider extends Person implements CustomerService {
    
    customers?: Customer[];
    complaints: string[];

    constructor(providerDto: ProviderDTO) {
        super(providerDto.name, providerDto.birthdate);
        this.complaints = [];
    }

    toDto() {
        const providerDto = new ProviderDTO(this.name, this.birthdate);
        providerDto.id = this.id;
        providerDto.customers != this.customers;
        providerDto.complaints = this.complaints;
        return providerDto;
    }

    addCustomer(customer: Customer){
        if(!this.customers) this.customers = [];
        this.customers.push(customer);
    }

    addComplaint(customer: Customer, complaint: string){
        this.complaints.push(complaint);
    }

    totalOrders(){
        let totalOrders = 0;
        if(!this.customers) return totalOrders;
        for(const customer of this.customers) {
            totalOrders += customer.totalOrders();
        }
        return totalOrders;
    }

    processSale(order: Order) {
        if(this.complaints && this.complaints.length >= 3) {
            throw new Error("Provider can't be able to process sale. Excepted max numbers(3) of complaints!");
        }
    }
}