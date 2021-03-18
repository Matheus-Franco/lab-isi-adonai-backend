import "reflect-metadata"

import { inject, injectable } from 'tsyringe'

import Offer from "../infra/typeorm/entities/Offer";
import IAdminsRepository from "../repositories/IAdminsRepository";

interface IRequest {
    title: string;
    description: string;
    price: string;
    year_model: string;
}

interface IResponse {
    offer: Offer;
}

@injectable()
class AuthenticateAdminService {
    constructor(
        @inject('AdminsRepository')
        private adminsRepository: IAdminsRepository,
    ) { }

    public async execute({ title, description, price, year_model }: IRequest): Promise<IResponse> {
        const offer = await this.adminsRepository.createOffer({
            title, description, price, year_model
        });

        return { offer };
    }
}

export default AuthenticateAdminService;