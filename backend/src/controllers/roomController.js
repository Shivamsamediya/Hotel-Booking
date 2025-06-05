import Room from '../models/roomModel.js';

export const getRooms = async (req, res) => {
    const rooms = await Room.find();
    res.status(200).json(rooms);
};

export const addRoom = async (req, res) => {
    try {
        const room = new Room(req.body);
        await room.save();
        res.status(201).json(room);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
