import express from 'express';
import {
  createBooking,
  getBooking,
  cancelBooking,
} from '../controllers/bookingController.js';

const router = express.Router();

router.post('/', createBooking);
router.get('/:id', getBooking);
router.delete('/:id', cancelBooking);

export default router;
