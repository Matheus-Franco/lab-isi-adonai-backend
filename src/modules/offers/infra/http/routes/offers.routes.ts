import { Router } from 'express'

import OffersController from '../controllers/OffersController'
import ensureAuthenticated from '../../../../../shared/infra/http/middlewares/ensureAuth';
import ListOfferByIdController from '../controllers/ListOfferByIdController'


const offersRouter = Router()
const offersController = new OffersController();
const listOfferByIdController = new ListOfferByIdController();

offersRouter.post('/', ensureAuthenticated , offersController.create)
offersRouter.get('/', offersController.index)
offersRouter.get('/:offer_id', listOfferByIdController.index)

export default offersRouter