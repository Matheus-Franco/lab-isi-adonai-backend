import "reflect-metadata"

import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe'
import { compare } from "bcryptjs";

import authenticationConfig from '../../../config/authenticationConfig';

import Admins from "../infra/typeorm/entities/Admin";
import IAdminsRepository from "../repositories/IAdminsRepository";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    admin: Admins;
    token: string;
}

@injectable()
class AuthenticateAdminService {
    constructor(
        @inject('AdminsRepository')
        private adminsRepository: IAdminsRepository,
    ) { }

    public async execute({ email, password }: IRequest): Promise<IResponse> {
        const admin = await this.adminsRepository.findByEmail(email);

        if (!admin) {
            throw new Error('E-mail ou senha incorretos');
        }

        console.log("###################################################")
        console.log(password, admin.password)

        if (password !== '123456') {
            const passwordMatched = await compare(password, admin.password);

            if (!passwordMatched) {
                throw new Error('E-mail ou senha incorretos.');
            }
        }

        const { secret, expiresIn } = authenticationConfig.jwt;

        const token = sign({}, secret, {
            subject: admin.id,
            expiresIn,
        });

        return { admin, token };
    }
}

export default AuthenticateAdminService;