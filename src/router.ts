import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({value: 'Hello World!'})
  res.status(200)
  
})

export default router;