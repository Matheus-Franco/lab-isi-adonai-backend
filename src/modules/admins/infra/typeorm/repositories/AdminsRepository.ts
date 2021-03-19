import { getRepository, Repository } from 'typeorm';

import IAdminsRepository from '../../../repositories/IAdminsRepository';
import Admins from '../entities/Admin';
import Offer from '../../../../offers/infra/typeorm/entities/Offer';

interface ICreateOfferData {
    title: string;
    description: string;
    price: string;
    year_model: string;
}

class AdminsRepository implements IAdminsRepository {
    private ormRepository: Repository<Admins>
    private offerOrmRepository: Repository<Offer>

    constructor() {
        this.ormRepository = getRepository(Admins)
        this.offerOrmRepository = getRepository(Offer)
    }

    public async findById(id: string): Promise<Admins | undefined> {
        const admin = await this.ormRepository.findOne({
            where: { id },
        });

        return admin;
    }

    public async findByEmail(email: string): Promise<Admins | undefined> {
        const admin = await this.ormRepository.findOne({
            where: { email },
        });

        return admin;
    }

    public async createOffer(offerData: ICreateOfferData): Promise<Offer> {
        const offer = this.offerOrmRepository.create(offerData);

        await this.offerOrmRepository.save(offer);

        return offer;
    }

    public async listAllCreatedOffers(): Promise<Offer[]> {
        const offers = await this.offerOrmRepository.find();

        return offers
    }

}

export default AdminsRepository;
