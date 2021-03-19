import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListOfferByIdService from '../../../services/ListOfferByIdService';

export default class ListOfferByIdController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { offer_id } = request.params;

    const listOfferById = container.resolve(ListOfferByIdService);

    const offer = await listOfferById.execute({ offer_id });

    return response.json(offer);
  }
}