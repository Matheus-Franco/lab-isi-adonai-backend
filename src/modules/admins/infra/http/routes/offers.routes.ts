import { Router } from 'express'

import OffersController from '../controllers/OffersController'

const offersRouter = Router()
const offersController = new OffersController();

offersRouter.post('/', offersController.create)
offersRouter.get('/', offersController.index)

export default offersRouter