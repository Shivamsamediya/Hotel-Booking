import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
    type: String,
    price: Number,
    description: String,
    amenities: [String]
});

export default mongoose.model('Room', roomSchema);
