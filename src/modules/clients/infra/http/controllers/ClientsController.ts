import { Response, Request } from 'express';
import { container } from 'tsyringe';

import CreateClientService from '../../../services/CreateClientService';

export default class ClientsController {
    public async create(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body;

        const createClient = container.resolve(CreateClientService)

        const client = await createClient.execute({
            name,
            email,
            password,
        });

        return response.json(client);
    }
}