import "reflect-metadata"

import { inject, injectable } from 'tsyringe'

import Offer from "../infra/typeorm/entities/Offer";
import IOffersRepository from "../repositories/IOffersRepository";

interface IRequest {
    title: string;
    description: string;
    price: string;
    year_model: string;
}

@injectable()
class CreateOfferService {
    constructor(
        @inject('OffersRepository')
        private offersRepository: IOffersRepository
    ) { }

    public async execute({ title, description, price, year_model }: IRequest): Promise<Offer> {
        const offer = await this.offersRepository.createOffer({
            title, description, price, year_model
        });

        return offer;
    }
}

export default CreateOfferService;