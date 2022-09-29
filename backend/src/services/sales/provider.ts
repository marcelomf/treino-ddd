import { Provider } from "../../contexts/sales/entities/provider";
import { ProviderDTO } from "../../contexts/sales/dto/provider";
import { ProviderRepository } from "../../contexts/sales/repositories/provider";

export class ProviderAppService {
    static async save(dataProviderUI: any) {
        const providerDto = ProviderDTO.fromUI(dataProviderUI);
        const provider = new Provider(providerDto);
        const providerRepository = new ProviderRepository();
        await providerRepository.saveDb(provider.toDto());
    }

    static async remove(providerParams: any) {
        const providerRepository = new ProviderRepository();
        await providerRepository.removeDb(providerParams.id);
    }

    static async findById(providerParams: any) {
        const providerRepository = new ProviderRepository();
        return await providerRepository.findByIdDb(providerParams.id);
    }
    
    static async findAll() {
        const providerRepository = new ProviderRepository();
        return await providerRepository.findAllDb();
    }

    static async count() {
        const providerRepository = new ProviderRepository();
        return await providerRepository.countDb();
    }
}