import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import RoomList from './components/RoomList';
import BookingForm from './components/BookingForm';
import ManageBooking from './components/ManageBooking';
import AddRoom from './components/AddRoom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RoomList />} />
        <Route path="/add-rooms" element={<AddRoom />} />
        <Route path="/book-rooms" element={<BookingForm />} />
        <Route path="/manage-booking" element={<ManageBooking />} />
      </Routes>
    </>
  );
}

export default App;