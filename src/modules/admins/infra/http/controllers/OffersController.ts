import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateOfferService from '../../../services/CreateOfferService';

export default class OffersController {
    public async create(request: Request, response: Response): Promise<Response> {
        const { title, description, price, year_model } = request.body;

        const createOffer = container.resolve(CreateOfferService)
        
        const offer = await createOffer.execute({
            title, description, price, year_model
        });

        return response.json(offer);
    }
}