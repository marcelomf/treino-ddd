import { Person } from './person';
import { Genre } from '../vo/genre';
import { Order } from '../../sales/entities/order'
import dayjs from 'dayjs';

export class Customer extends Person {
    
    private only18Plus?: boolean;
    private orders?: Order[];

    constructor(name: string, birthdate: Date, genre: Genre);

    constructor(name: string, birthdate: Date, genre: Genre, only18Plus: boolean);

    constructor(...myArgs: any[]) {
        if(myArgs.length == 3) {
            super(myArgs[0], myArgs[1], myArgs[2]);
        } else if(myArgs.length == 4) {
            super(myArgs[0], myArgs[1], myArgs[2]);
            this.only18Plus = myArgs[3];
        } else {
            throw new Error("Invalid arguments for Customer.");
        }

        if(this.only18Plus) {
            if(dayjs(new Date()).diff(this.birthdate, 'years') < 18) {
                throw new Error("Operation only available to persons over 18 years of age.");
            }
        }
    }

    addOrder(order: Order) {
        if(!this.orders) this.orders = [];
        this.orders.push(order);
    }

    totalOrders() {
        if(!this.orders) return 0;
        return this.orders?.length;
    }

    getRating() {
        let rating: 'NORMAL' | 'VIP' = 'NORMAL';
        if(!this.orders) return rating;
        if(this.orders?.length >= 3) {
            rating = 'VIP';
        } 
        return rating;
    }
}