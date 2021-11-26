import { Request, Response } from 'express'
import ExampleService from '../services/ExampleService'

export default class ExampleController {
  static async getExample(req: Request, res: Response) {
    const data = await ExampleService.getExample()
    res.json(data)
  }
}
