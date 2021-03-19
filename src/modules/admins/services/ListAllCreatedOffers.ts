import { inject, injectable } from 'tsyringe';

import Offer from '../infra/typeorm/entities/Offer';
import IAdminsRepository from '../repositories/IAdminsRepository';

@injectable()
class ListArticleByIdService {
  constructor(
    @inject('AdminsRepository')
    private adminsRepository: IAdminsRepository,
  ) {}

  public async execute(): Promise<Offer[]> {
    const articles = await this.adminsRepository.listAllCreatedOffers();

    if (!articles) {
      throw new Error('Nenhuma oferta encontrada');
    }

    return articles;
  }
}

export default ListArticleByIdService;