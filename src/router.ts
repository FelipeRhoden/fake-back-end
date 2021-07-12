import express from 'express';
import { getUsers } from './controllers/users';

const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({value: 'Hello World!'})
  res.status(200)
  
})

router.get('/users', getUsers);

export default router;