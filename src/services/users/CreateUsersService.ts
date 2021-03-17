import User from "../../models/User";
import UsersRepository from "../../repositories/UsersRepository";

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

        const user = await this.usersRepository.createUser({
            name,
            email,
            password
        });

        return user;
    }
}