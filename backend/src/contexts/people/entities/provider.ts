import { Person } from './person';
import { Customer } from './customer';
import { CustomerService } from './customer_service';

export class Provider extends Person implements CustomerService {
    
    customers?: Customer[];
    complaints: string[];

    constructor(name: string, birthdate: Date) {
        super(name, birthdate);
        this.complaints = [];
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

    processSale() {
        if(this.complaints && this.complaints.length >= 3) {
            throw new Error("Provider can't be able to process sale. Excepted numbers(3) of complaints!");
        }
    }
}