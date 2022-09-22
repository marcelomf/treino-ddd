import { Provider } from "../entities/provider";

export class ProviderDTO extends Provider {

    fromORM(dataProvider: any) {
        this.id = dataProvider.id;
        this.name = dataProvider.name;
        this.birthdate = dataProvider.birthdate;
        this.genre = dataProvider.genre;
        this.addresses = dataProvider.addresses || [];
        this.customers = dataProvider.customers || [];
        this.complaints = dataProvider.complaints || [];
    }

    toORM() {
        return {
            id: this.id,
            name: this.name,
            birthdate: this.birthdate,
            genre: this.genre,
            address: this.addresses,
            customers: this.customers,
            complaints: this.complaints,
        }
    }

    fromUI(dataProvider: any) {
        this.id = dataProvider.id;
        this.name = dataProvider.name;
        this.birthdate = dataProvider.birthdate;
        this.genre = dataProvider.genre;
        this.addresses = dataProvider.addresses || [];
        this.customers = dataProvider.customers || [];
        this.complaints = dataProvider.complaints || [];
    }

    toUI() {
        return {
            id: this.id,
            name: this.name,
            birthdate: this.birthdate,
            genre: this.genre,
            address: this.addresses,
            customers: this.customers,
            complaints: this.complaints,
        }
    }

}