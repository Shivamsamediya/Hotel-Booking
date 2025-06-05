import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BookingForm = () => {
  const [form, setForm] = useState({
    userName: '',
    roomType: '',
    guests: '',
    startDate: '',
    endDate: '',
  });

  const navigate = useNavigate();

  const [msg, setMsg] = useState('');

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/bookings', form)
      .then((res) => {
        localStorage.setItem('bookingID',res.data._id);
        setMsg('✅ Booking successful!');
        setTimeout(() => {
          navigate('/');
        }, 2500);
      })
      .catch((err) => {
        setMsg(err.response?.data?.error || '❌ Something went wrong');
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white p-6 rounded-xl border border-gray-200"
      >
        <h2 className="text-2xl font-semibold text-center text-indigo-600 mb-6">
          Book a Room
        </h2>

        <input
          name="userName"
          value={form.userName}
          onChange={handleChange}
          placeholder="Your Name"
          className="mb-3 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
          required
        />

        <select
          name="roomType"
          value={form.roomType}
          onChange={handleChange}
          className="mb-3 w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          required
        >
          <option value="">Select Room Type</option>
          <option value="Deluxe Room">Deluxe Room</option>
          <option value="Standard Room">Standard Room</option>
          <option value="Suite">Suite</option>
        </select>

        <input
          name="guests"
          type="number"
          value={form.guests}
          onChange={handleChange}
          placeholder="No. of Guests"
          min={1}
          className="mb-3 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
          required
        />

        <input
          name="startDate"
          type="date"
          value={form.startDate}
          onChange={handleChange}
          className="mb-3 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
          required
        />

        <input
          name="endDate"
          type="date"
          value={form.endDate}
          onChange={handleChange}
          className="mb-4 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-300"
          required
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Book Now
        </button>

        {msg && (
          <div className="mt-4 text-center">
            <p
              className={`text-sm font-medium ${
                msg.includes('successful') ? 'text-green-600' : 'text-red-500'
              }`}
            >
              {msg}
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default BookingForm;
