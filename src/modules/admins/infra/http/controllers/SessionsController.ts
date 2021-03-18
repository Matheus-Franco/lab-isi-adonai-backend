import { Request, Response } from 'express';
import { container } from 'tsyringe';

import AuthenticateAdminService from '../../../services/AuthenticateAdminService';

export default class SessionsController {
    public async create(request: Request, response: Response): Promise<Response> {
        const { email, password } = request.body;

        const authenticateAdmin = container.resolve(AuthenticateAdminService)

        const { admin, token } = await authenticateAdmin.execute({
            email,
            password,
        });

        return response.json({ admin, token });
    }
}