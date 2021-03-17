import Users from '../infra/typeorm/entities/User';
import IUsersRepository from '../repositories/IUsersRepository';

import { hash } from 'bcryptjs';
import { inject, injectable } from 'tsyringe';

interface IRequest {
    name: string;
    email: string;
    password: string;
}

@injectable()
class CreateUserService {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository,
    ) { }

    public async execute({ name, email, password }: IRequest): Promise<Users> {
        const checkIfUserExists = await this.usersRepository.findByEmail(email);

        if (checkIfUserExists) {
            throw new Error('Este e-mail já está sendo usado.');
        }

        const hashedPassword = await hash(password, 8);

        const user = await this.usersRepository.createUser({
            name,
            email,
            password: hashedPassword,
        });

        return user;
    }
}

export default CreateUserService;