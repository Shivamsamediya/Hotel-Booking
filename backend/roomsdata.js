import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Room from './src/models/roomModel.js';

dotenv.config();
mongoose.connect(process.env.MONGO_URI);

const rooms = [
  {
    "type": "Deluxe Room",
    "price": 2500,
    "description": "Spacious room with a queen bed, sea view, and free Wi-Fi.",
    "amenities": ["Wi-Fi", "TV", "Air Conditioning"]
  },
  {
    "type": "Executive Suite",
    "price": 4500,
    "description": "Luxurious suite with king-size bed and living area.",
    "amenities": ["Wi-Fi", "TV", "Mini Bar", "Jacuzzi"]
  },
  {
    "type": "Budget Room",
    "price": 900,
    "description": "Affordable option for solo travelers.",
    "amenities": ["Wi-Fi"]
  },
  {
    "type": "Family Suite",
    "price": 3200,
    "description": "Spacious suite suitable for families with kids.",
    "amenities": ["Wi-Fi", "TV", "Mini Kitchen", "Balcony"]
  },
  {
    "type": "Presidential Suite",
    "price": 10000,
    "description": "Ultimate luxury with private butler and top-class amenities.",
    "amenities": ["Wi-Fi", "TV", "Mini Bar", "Personal Butler", "Private Pool"]
  },
  {
    "type": "Studio Room",
    "price": 1800,
    "description": "Modern studio for business travelers.",
    "amenities": ["Wi-Fi", "Workspace", "TV"]
  },
  {
    "type": "Garden View Room",
    "price": 2200,
    "description": "Room with a beautiful view of the hotel gardens.",
    "amenities": ["Wi-Fi", "TV", "Balcony"]
  },
  {
    "type": "Twin Sharing Room",
    "price": 1700,
    "description": "Ideal for friends or colleagues traveling together.",
    "amenities": ["Wi-Fi", "TV", "Twin Beds"]
  },
  {
    "type": "Penthouse",
    "price": 8500,
    "description": "Top-floor penthouse with luxury interiors and stunning views.",
    "amenities": ["Wi-Fi", "TV", "Private Terrace", "Jacuzzi", "Bar"]
  }
];

Room.insertMany(rooms).then(() => {
  console.log('Rooms added');
  mongoose.disconnect();
});
