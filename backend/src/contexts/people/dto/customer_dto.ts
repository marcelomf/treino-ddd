import { Customer } from "../entities/customer";

export class CustomerDTO extends Customer {
    
    fromORM(dataProvider: any) {
        this.id = dataProvider.id;
        this.name = dataProvider.name;
        this.birthdate = dataProvider.birthdate;
        this.genre = dataProvider.genre;
        this.addresses = dataProvider.addresses || [];
        this.orders = dataProvider.orders || [];
    }

    toORM() {
        return {
            id: this.id,
            name: this.name,
            birthdate: this.birthdate,
            genre: this.genre,
            address: this.addresses || [],
            orders: this.orders || []
        }
    }

    fromUI(dataProvider: any) {
        this.id = dataProvider.id;
        this.name = dataProvider.name;
        this.birthdate = dataProvider.birthdate;
        this.genre = dataProvider.genre;
        this.addresses = dataProvider.addresses || [];
        this.orders = dataProvider.orders || [];
    }

    toUI() {
        return {
            id: this.id,
            name: this.name,
            birthdate: this.birthdate,
            genre: this.genre,
            address: this.addresses || [],
            orders: this.orders || []
        }
    }
}