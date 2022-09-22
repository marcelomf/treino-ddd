import {Customer} from './customer';

export interface CustomerService {
    complaints: string[];
    addComplaint: (customer: Customer, complaint: string) => void;
}