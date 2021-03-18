import Client from '../infra/typeorm/entities/Client';
import IClientsRepository from '../repositories/IClientsRepository';

import { hash } from 'bcryptjs';
import { inject, injectable } from 'tsyringe';

interface IRequest {
    name: string;
    email: string;
    password: string;
}

@injectable()
class CreateClientService {
    constructor(
        @inject("ClientsRepository")
        private clientsRepository: IClientsRepository,
    ) { }

    public async execute({ name, email, password }: IRequest): Promise<Client> {
        const checkIfClientExists = await this.clientsRepository.findByEmail(email);

        if (checkIfClientExists) {
            throw new Error('Este e-mail já está sendo usado.');
        }

        const hashedPassword = await hash(password, 8);

        const client = await this.clientsRepository.createClient({
            name,
            email,
            password: hashedPassword,
        });

        return client;
    }
}

export default CreateClientService;