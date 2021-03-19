import { inject, injectable } from 'tsyringe';

import Offer from '../infra/typeorm/entities/Offer';
import IOffersRepository from '../repositories/IOffersRepository';

@injectable()
class ListAllCreatedOffers {
  constructor(
    @inject('OffersRepository')
    private offersRepository: IOffersRepository
  ) {}

  public async execute(year_model?: any): Promise<Offer[]> {
    const articles = await this.offersRepository.listAllCreatedOffers(year_model);

    if (!articles) {
      throw new Error('Nenhuma oferta encontrada');
    }

    return articles;
  }
}

export default ListAllCreatedOffers;