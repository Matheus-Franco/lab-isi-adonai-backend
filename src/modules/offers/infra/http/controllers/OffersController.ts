import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateOfferService from '../../../services/CreateOfferService';
import ListAllCreatedOffers from '../../../services/ListAllCreatedOffers';
import ListCreatedOffersBySearchParamsService from '../../../services/ListCreatedOffersBySearchParamsService';

export default class OffersController {
    public async create(request: Request, response: Response): Promise<Response> {
        const { title, description, price, year_model } = request.body;

        const createOffer = container.resolve(CreateOfferService)
        
        const offer = await createOffer.execute({
            title, description, price, year_model
        });

        return response.json(offer);
    }

    public async index(request: Request, response: Response): Promise<Response> {
        const { year_model } = request.query;

        const listOffers = container.resolve(ListAllCreatedOffers)
        
        const offers = await listOffers.execute(year_model);

        return response.json(offers);
    }
}