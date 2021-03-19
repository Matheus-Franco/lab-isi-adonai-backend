import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import authenticationConfig from '../../../../config/authenticationConfig';

interface TokenPayload {
    iat: string;
    exp: string;
    sub: string;
}

export default function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction,
): void {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new Error('JWT não identificado.');
    }

    const [, token] = authHeader.split(' ');

    try {
        const decoded = verify(token, authenticationConfig.jwt.secret);

        const { sub } = decoded as TokenPayload;

        request.user = {
            id: sub,
        };

        return next();
    } catch (err) {
        throw new Error('JWT inválido');
    }
}