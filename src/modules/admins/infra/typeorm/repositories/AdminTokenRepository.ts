import { getRepository, Repository } from 'typeorm';

import IAdminTokenRepository from '../../../repositories/IAdminTokenRepository';
import AdminToken from '../entities/AdminToken';

class ClientTokenRepository implements IAdminTokenRepository {
    private ormRepository: Repository<AdminToken>

    constructor() {
        this.ormRepository = getRepository(AdminToken)
    }

    public async findByToken(token: string): Promise<AdminToken | undefined> {
        const adminToken = await this.ormRepository.findOne({
            where: { token }
        });

        return adminToken;
    }

    public async generate(client_id: string): Promise<AdminToken> {
        const adminToken = this.ormRepository.create({ client_id });

        await this.ormRepository.save(adminToken);

        return adminToken;
    }
}

export default ClientTokenRepository;