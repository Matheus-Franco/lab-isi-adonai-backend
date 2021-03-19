import { getRepository, Repository } from 'typeorm';

import IOffersRepository from '../../../repositories/IOffersRepository'
import Offer from '../entities/Offer';

interface ICreateOfferData {
    title: string;
    description: string;
    price: string;
    year_model: string;
}

class OffersRepository implements IOffersRepository {
    private ormRepository: Repository<Offer>

    constructor() {
        this.ormRepository = getRepository(Offer)
    }

    public async createOffer(offerData: ICreateOfferData): Promise<Offer> {
        const offer = this.ormRepository.create(offerData);

        await this.ormRepository.save(offer);

        return offer;
    }

    public async listAllCreatedOffers(year_model?: any): Promise<Offer[]> {
        const offers = await this.ormRepository.find({
            where: { year_model }
        });

        const offersTeste = await this.ormRepository.find();

        return year_model ? offers : offersTeste
    }

    public async findOfferById(offer_id: string): Promise<Offer | undefined> {
        const offer = await this.ormRepository.findOne({
            where: {
                id: offer_id
            }
        });

        return offer;
    }

}

export default OffersRepository;
