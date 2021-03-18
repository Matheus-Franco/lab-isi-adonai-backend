import "reflect-metadata"

import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe'
import { compare } from "bcryptjs";

import authenticationConfig from '../../../config/authenticationConfig';
import Clients from "../infra/typeorm/entities/Client";
import IClientsRepository from "../repositories/IClientsRepository";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    client: Clients;
    token: string;
}

@injectable()
class AuthenticateClientService {
    constructor(
        @inject('ClientsRepository')
        private clientsRepository: IClientsRepository,
    ) { }

    public async execute({ email, password }: IRequest): Promise<IResponse> {
        const client = await this.clientsRepository.findByEmail(email);

        if (!client) {
            throw new Error('E-mail ou senha incorretos.');
        }

        const passwordMatched = await compare(password, client.password);

        if (!passwordMatched) {
            throw new Error('E-mail ou senha incorretos.');
        }

        const { secret, expiresIn } = authenticationConfig.jwt;

        const token = sign({}, secret, {
            subject: client.id,
            expiresIn,
        });

        return { client, token };
    }
}

export default AuthenticateClientService;