import { Address } from "../vo/address";
import { CustomerDTO } from "./customer";
export class ProviderDTO {

    id?: string;
    name: string;
    birthdate: Date;
    addresses?: Address[];
    customers?: CustomerDTO[];
    complaints?: string[];

    constructor(name: string, birthdate: Date) {
        this.name = name;
        this.birthdate = birthdate;
    }

    static fromORM(dataProvider: any) {
        const provider = new ProviderDTO(dataProvider.name, dataProvider.birthdate);
        provider.id = dataProvider.id;
        provider.addresses = dataProvider.addresses;
        provider.customers = dataProvider.customers;
        provider.complaints = dataProvider.complaints;
        return provider;
    }

    toORM() {
        return {
            id: this.id,
            name: this.name,
            birthdate: this.birthdate,
            addresses: { create: this.addresses },
            customers: { create: this.customers },
            complaints: { create: this.complaints },
        }
    }

    static fromUI(dataProvider: any) {
        const provider = new ProviderDTO(dataProvider.name, dataProvider.birthdate);
        provider.id = dataProvider.id;
        provider.addresses = dataProvider.addresses;
        provider.customers = dataProvider.customers;
        provider.complaints = dataProvider.complaints;
        return provider;
    }

    toUI() {
        return {
            id: this.id,
            name: this.name,
            birthdate: this.birthdate,
            addresses: this.addresses,
            customers: this.customers,
            complaints: this.complaints,
        }
    }

}