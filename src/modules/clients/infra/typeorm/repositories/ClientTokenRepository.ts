import { getRepository, Repository } from 'typeorm';

import IClientTokenRepository from '../../../repositories/IClientTokenRepository';
import ClientToken from '../entities/ClientToken';

class ClientTokenRepository implements IClientTokenRepository {
    private ormRepository: Repository<ClientToken>

    constructor() {
        this.ormRepository = getRepository(ClientToken)
    }

    public async findByToken(token: string): Promise<ClientToken | undefined> {
        const clientToken = await this.ormRepository.findOne({
            where: { token }
        });

        return clientToken;
    }

    public async generate(client_id: string): Promise<ClientToken> {
        const clientToken = this.ormRepository.create({ client_id });

        await this.ormRepository.save(clientToken);

        return clientToken;
    }
}

export default ClientTokenRepository;