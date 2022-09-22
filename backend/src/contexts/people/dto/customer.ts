import { OrderDTO } from "../../sales/dto/order";
import { Address } from "../vo/address";
import { Genre } from "../vo/genre";

export class CustomerDTO {

    id?: string;
    only18Plus?: boolean;
    name: string;
    birthdate: Date;
    genre: Genre;
    addresses?: Address[];
    orders?: OrderDTO[];

    constructor(name: string, birthdate: Date, genre: Genre) {
        this.name = name;
        this.birthdate = birthdate;
        this.genre = genre;
    }
    
    static fromORM(dataCustomer: any): CustomerDTO {
        const customerDto = new CustomerDTO(dataCustomer.name, new Date(dataCustomer.birthdate), dataCustomer.genre);
        customerDto.id = dataCustomer.id;
        customerDto.only18Plus = dataCustomer.only18Plus;
        customerDto.addresses = dataCustomer.addresses;
        customerDto.orders = dataCustomer.orders;
        return customerDto;
    }

    toORM() {
        return {
            id: this.id,
            only18Plus: this.only18Plus,
            name: this.name,
            birthdate: this.birthdate,
            genre: this.genre,
            addresses: {create: this.addresses },
            orders: {create: this.orders }
        }
    }

    static fromUI(dataCustomer: any): CustomerDTO {
        const customerDto = new CustomerDTO(dataCustomer.name, new Date(dataCustomer.birthdate), dataCustomer.genre);
        customerDto.id = dataCustomer.id;
        customerDto.only18Plus = dataCustomer.only18Plus;
        customerDto.addresses = dataCustomer.addresses;
        customerDto.orders = dataCustomer.orders;
        return customerDto;
    }

    toUI() {
        return {
            id: this.id,
            only18Plus: this.only18Plus,
            name: this.name,
            birthdate: this.birthdate,
            genre: this.genre,
            addresses: this.addresses,
            orders: this.orders
        }
    }
}