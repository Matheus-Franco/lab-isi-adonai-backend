import { Router } from 'express'

import OffersController from '../controllers/OffersController'
import ensureAuthenticated from '../../../../../shared/infra/http/middlewares/ensureAuth';

const offersRouter = Router()
const offersController = new OffersController();

offersRouter.post('/', ensureAuthenticated , offersController.create)
offersRouter.get('/', offersController.index)

export default offersRouter