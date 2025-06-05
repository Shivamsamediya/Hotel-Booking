import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ManageBooking = () => {
  const [bookingId, setBookingId] = useState('');
  const [booking, setBooking] = useState(null);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();
  
  const fetchBooking = async () => {
    try {
      const res = await axios.get(`https://hotel-booking-five-red.vercel.app/bookings/${bookingId}`);
      setBooking(res.data);
      setError('');
    } catch (err) {
      setBooking(null);
      setError(err.response?.data?.error || 'Booking not found');
    }
  };

  const cancelBooking = async () => {
    try {
      await axios.delete(`https://hotel-booking-five-red.vercel.app/bookings/${bookingId}`);
      setBooking(null);
      setMessage('✅ Booking cancelled successfully!');
      
      localStorage.removeItem('bookingID');

      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (err) {
      console.log(err);
      setMessage('❌ Failed to cancel booking');
    }
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">🔍 Lookup Booking</h2>

      <div className="flex gap-2 mb-4">
        <input
          value={bookingId}
          onChange={(e) => setBookingId(e.target.value)}
          placeholder="Enter Booking ID"
          className="flex-1 px-4 py-2 border rounded-md"
        />
        <button
          onClick={fetchBooking}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Search
        </button>
      </div>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      {booking && (
        <div className="border p-4 rounded-md shadow-sm bg-white">
          <p><strong>Name:</strong> {booking.userName}</p>
          <p><strong>Room:</strong> {booking.roomType}</p>
          <p><strong>Guests:</strong> {booking.guests}</p>
          <p><strong>Dates:</strong> {booking.startDate} to {booking.endDate}</p>
          <button
            onClick={cancelBooking}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Cancel Booking
          </button>
        </div>
      )}

      {message && <p className="text-green-600 mt-4">{message}</p>}
    </div>
  );
};

export default ManageBooking;
