import { Router } from 'express';

import clientsRouter from '../../../../modules/clients/infra/http/routes/clients.routes';
import sessionsRouter from '../../../../modules/clients/infra/http/routes/sessions.routes';

import adminSessionsRouter from '../../../../modules/admins/infra/http/routes/sessions.routes';

const routes = Router();

routes.use('/clients', clientsRouter);
routes.use('/sessions', sessionsRouter);

routes.use('/admin/sessions', adminSessionsRouter);

export default routes;