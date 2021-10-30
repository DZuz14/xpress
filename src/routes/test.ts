import { Router } from 'express';

const testRouter = Router();

testRouter.get('/', (req, res) => {
  res.json({ hello: 'world' })
})

export default testRouter