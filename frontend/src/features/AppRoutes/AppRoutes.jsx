// eslint-disable-next-line no-unused-vars
import React from 'react';
import {Route, Routes} from 'react-router-dom'
import BookingsList from '../Bookings/BookingsList'
import BookingDetails from '../Bookings/BookingDetails'
import NewBookingForm from '../Bookings/NewBookingForm'

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<BookingsList />} /> 
            <Route path="/bookings/:id" element={<BookingDetails />} /> 
            <Route path="/new" element={<NewBookingForm />} /> 
        </Routes>
    )
}

export default AppRoutes