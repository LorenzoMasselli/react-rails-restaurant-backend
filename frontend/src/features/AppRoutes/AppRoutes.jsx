import React from 'react';
import {Route, Routes} from 'react-router-dom'
import BookingsList from '../Bookings/BookingsList'
import BookingDetails from '../Bookings/BookingDetails'

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<BookingsList />} /> 
            <Route path="/bookings/:id" element={<BookingDetails />} /> 
            <Route path="/new" element={<h1>New Booking Form</h1>} /> 
        </Routes>
    )
}

export default AppRoutes