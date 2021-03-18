import { getRepository, Repository } from 'typeorm';

import IAdminsRepository from '../../../repositories/IAdminsRepository';
import Admins from '../entities/Admin';

class AdminsRepository implements IAdminsRepository {
    private ormRepository: Repository<Admins>

    constructor() {
        this.ormRepository = getRepository(Admins)
    }

    public async findById(id: string): Promise<Admins | undefined> {
        const admin = await this.ormRepository.findOne({
            where: { id },
        });

        return admin;
    }

    public async findByEmail(email: string): Promise<Admins | undefined> {
        const admin = await this.ormRepository.findOne({
            where: { email },
        });

        return admin;
    }
}

export default AdminsRepository;
