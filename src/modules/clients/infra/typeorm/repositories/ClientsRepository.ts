import { getRepository, Repository } from 'typeorm';

import IClientsRepository from '../../../repositories/IClientsRepository';
import Client from '../entities/Client';

interface ICreateClientData {
    name: string
    email: string
    password: string
}

class ClientsRepository implements IClientsRepository {
    private ormRepository: Repository<Client>

    constructor() {
        this.ormRepository = getRepository(Client)
    }

    public async findById(id: string): Promise<Client | undefined> {
        const client = await this.ormRepository.findOne({
            where: { id },
        });

        return client;
    }

    public async findByEmail(email: string): Promise<Client | undefined> {
        const client = await this.ormRepository.findOne({
            where: { email },
        });

        return client;
    }

    public async createClient(clientData: ICreateClientData): Promise<Client> {
        const client = this.ormRepository.create(clientData);

        await this.ormRepository.save(client);

        return client;
    }
}

export default ClientsRepository;
