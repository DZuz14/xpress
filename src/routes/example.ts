import { Router } from 'express'
import ExampleController from '../controllers/ExampleController'

const router = Router()

router.get('/', ExampleController.getExample)

export default router
