import User from "../../models/User";
import UsersRepository from "../../repositories/UsersRepository";

import { hash } from "bcryptjs";

interface IRequest {
    name: string
    email: string
    password: string
}

export default class CreateUsersService {
    private usersRepository: UsersRepository;

    constructor(usersRepository: UsersRepository) {
        this.usersRepository = usersRepository;
    }

    public async execute({ 
        name,
        email,
        password
     }: IRequest): Promise<User> {
        const userAlreadyExists = await this.usersRepository.findUserByEmail(email);

        if (userAlreadyExists) {
            throw new Error('Este e-mail já se encontra em uso.');
        };

        const hashedPassword = await hash(password, 8);

        const user = await this.usersRepository.createUser({
            name,
            email,
            password: hashedPassword
        });

        return user;
    }
}