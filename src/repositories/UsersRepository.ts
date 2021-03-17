import { getRepository, Repository } from 'typeorm';

import User from '../models/User';

interface ICreateUserProps {
    name: string
    email: string
    password: string
}

class UsersRepository {
    private ormRepository: Repository<User>
    
    constructor() {
        this.ormRepository = getRepository(User);
    }

    public async createUser(userData: ICreateUserProps): Promise<User> {
        const user = this.ormRepository.create(userData);

        await this.ormRepository.save(user);

        return user;
    }

    public async findUserByEmail(userEmail: string): Promise<User | undefined> {
        const user = await this.ormRepository.findOne({
            where: { email: userEmail }
        });

        return user;
    }
}

export default UsersRepository;