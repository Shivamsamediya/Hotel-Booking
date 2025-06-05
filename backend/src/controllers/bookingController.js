import Booking from '../models/bookingModel.js';
import Room from '../models/roomModel.js';

export const createBooking = async (req, res) => {
  try {
    const { roomType } = req.body;

    const totalRooms = await Room.countDocuments({ type: new RegExp(`^${roomType}$`, 'i') });

    const bookedCount = await Booking.countDocuments({ roomType: new RegExp(`^${roomType}$`, 'i') });

    if (bookedCount >= totalRooms) {
      return res.status(400).json({ error: 'No rooms available for the selected room type.' });
    }

    const booking = new Booking(req.body);
    await booking.save();

    res.status(201).json(booking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getBooking = async (req, res) => {
  const booking = await Booking.findById(req.params.id);
  if (!booking) return res.status(404).json({ error: 'Booking not found' });
  res.status(200).json(booking);
};

export const cancelBooking = async (req, res) => {
  const booking = await Booking.findByIdAndDelete(req.params.id);
  if (!booking) return res.status(404).json({ error: 'Booking not found' });
  res.status(200).json({ message: 'Booking cancelled' });
};
