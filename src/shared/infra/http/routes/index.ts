import { Router } from 'express';

import clientsRouter from '../../../../modules/clients/infra/http/routes/clients.routes';
import sessionsRouter from '../../../../modules/clients/infra/http/routes/sessions.routes';

import adminSessionsRouter from '../../../../modules/admins/infra/http/routes/sessions.routes';
import offersRouter from '../../../../modules/admins/infra/http/routes/offers.routes';

const routes = Router();

routes.use('/clients', clientsRouter);
routes.use('/sessions', sessionsRouter);

routes.use('/admin/sessions', adminSessionsRouter);
routes.use('/admin/offers', offersRouter);

export default routes;