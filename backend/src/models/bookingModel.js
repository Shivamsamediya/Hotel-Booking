import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    userName: String,
    roomType: String,
    guests: Number,
    startDate: Date,
    endDate: Date,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Booking', bookingSchema);
