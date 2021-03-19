import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateOfferService from '../../../services/CreateOfferService';
import ListAllCreatedOffers from '../../../services/ListAllCreatedOffers';

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
        const createOffer = container.resolve(ListAllCreatedOffers)
        
        const offer = await createOffer.execute();

        return response.json(offer);
    }
}