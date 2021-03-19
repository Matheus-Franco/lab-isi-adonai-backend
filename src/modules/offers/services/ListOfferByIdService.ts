import { inject, injectable } from 'tsyringe';
import Offer from '../infra/typeorm/entities/Offer';
import IOffersRepository from '../repositories/IOffersRepository';


interface IRequest {
  offer_id: string;
}

@injectable()
class ListOfferByIdService {
  constructor(
    @inject('OffersRepository')
    private offersRepository: IOffersRepository,
  ) {}

  public async execute({ offer_id }: IRequest): Promise<Offer | undefined> {
    const transaction = await this.offersRepository.findOfferById(offer_id);

    if (!transaction) {
      throw new Error('Oferta não encontrada.');
    }

    return transaction;
  }
}

export default ListOfferByIdService;