import { getRepository, Repository, Not } from 'typeorm';

import IUsersRepository from '../../../repositories/IUsersRepository';
import User from '../entities/User';

interface ICreateUserData {
    name: string
    email: string
    password: string
}

class UsersRepository implements IUsersRepository {
    private ormRepository: Repository<User>

    constructor() {
        this.ormRepository = getRepository(User)
    }

    public async findById(id: string): Promise<User | undefined> {
        const user = await this.ormRepository.findOne({
            where: { id },
        });

        return user;
    }

    public async findByEmail(email: string): Promise<User | undefined> {
        const user = await this.ormRepository.findOne({
            where: { email },
        });

        return user;
    }

    public async createUser(userData: ICreateUserData): Promise<User> {
        const user = this.ormRepository.create(userData);

        await this.ormRepository.save(user);

        return user;
    }
}

export default UsersRepository;
