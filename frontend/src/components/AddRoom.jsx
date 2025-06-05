import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddRoom = () => {
  const [formData, setFormData] = useState({
    type: '',
    description: '',
    price: '',
    amenities: ''
  });

  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      price: parseInt(formData.price),
      amenities: formData.amenities.split(',').map((a) => a.trim())
    };

    try {
      await axios.post('https://hotel-booking-five-red.vercel.app/rooms', payload);
      alert('Room added successfully!');
      setTimeout(() => {
        navigate('/');
      }, 1500);
    } catch (error) {
      console.error(error);
      alert('Error adding room');
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-indigo-700">Add New Room</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="type" placeholder="Room Type" className="w-full p-2 border rounded" onChange={handleChange} />
        <input name="description" placeholder="Description" className="w-full p-2 border rounded" onChange={handleChange} />
        <input name="price" placeholder="Price" type="number" className="w-full p-2 border rounded" onChange={handleChange} />
        <input name="amenities" placeholder="Amenities (comma-separated)" className="w-full p-2 border rounded" onChange={handleChange} />
        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">Add Room</button>
      </form>
    </div>
  );
};

export default AddRoom;
