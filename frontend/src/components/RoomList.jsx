import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RoomList = () => {
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('https://hotel-booking-five-red.vercel.app/rooms')
      .then((res) => setRooms(res.data))
      .catch(() => setRooms([]));
  }, []);

  const bookingID = localStorage.getItem('bookingID');

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-12 px-6">
      <div className='flex items-center justify-between py-2'>
        <button
          onClick={() => navigate('/add-rooms')}
          className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold py-2 rounded-xl hover:from-indigo-600 hover:to-purple-700 transition"
        >
          Add Rooms
        </button>

        <button
          onClick={() => navigate('/manage-booking')}
          className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold py-2 rounded-xl hover:from-indigo-600 hover:to-purple-700 transition"
        >
          Cancel Booking
        </button>

        {bookingID ? (
          <p className="text-sm text-gray-700 font-medium">
            Your Booking ID: <span className="text-indigo-600 font-mono">{bookingID}</span>
          </p>
        ) : (
          <p className="text-sm text-gray-500 italic">Book your rooms to get a Booking ID</p>
        )}
      </div>

      <h2 className="text-4xl font-extrabold text-center text-indigo-800 mb-14 drop-shadow-md">
        Available Rooms
      </h2>

      {rooms.length === 0 ? (
        <p className="text-center text-gray-600 text-lg animate-pulse">Loading rooms...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <div
              key={room._id}
              className="bg-white border border-gray-200 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              {room.image && (
                <img
                  src={room.image}
                  alt={room.type}
                  className="rounded-t-3xl w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-indigo-700 mb-1">{room.type}</h3>
                <p className="text-gray-600 text-sm mb-2">{room.description}</p>

                <p className="text-xl font-semibold text-indigo-600 mb-4">
                  ₹{room.price}
                  <span className="text-sm text-gray-500"> / night</span>
                </p>

                <div className="mb-4 text-sm text-gray-700">
                  <span className="font-semibold">🛎️ Amenities:</span>
                  <ul className="list-disc list-inside ml-2 mt-1 space-y-1">
                    {room.amenities?.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => navigate('/book-rooms')}
                  className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold py-2 rounded-xl hover:from-indigo-600 hover:to-purple-700 transition"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RoomList;
