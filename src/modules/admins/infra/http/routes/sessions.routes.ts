import { Router } from 'express'

import SessionsController from '../controllers/SessionsController'

const adminSessionsRouter = Router()
const adminsSessionsController = new SessionsController();

adminSessionsRouter.post('/', adminsSessionsController.create)

export default adminSessionsRouter