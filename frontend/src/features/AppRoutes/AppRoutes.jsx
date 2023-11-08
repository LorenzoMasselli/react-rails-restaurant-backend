// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import {Route, Routes} from 'react-router-dom'
import BookingsList from '../Bookings/BookingsList'
import BookingDetails from '../Bookings/BookingDetails'
import NewBookingForm from '../Bookings/NewBookingForm'
import BookingEditForm from '../Bookings/BookingEditForm';
import BookingHomepage from '../Bookings/BookingHomepage'
import User from '../components/User'

function AppRoutes({currUser, setCurrUser}) {
    
    return (
        <Routes>
            <Route path="/" element={<BookingHomepage />} /> 
            {currUser && currUser.admin ? (
                <>
                    <Route path="/bookings" element={<BookingsList />} /> 
                    <Route path="/bookings/:id" element={<BookingDetails />} /> 
                    <Route path="/bookings/:id/edit" element={<BookingEditForm />} /> 
                </>
            ): null}
            <Route path="/new" element={<NewBookingForm />} /> 
            <Route path="/admin" element={ <User currUser={currUser} setCurrUser={setCurrUser} />} /> 
        </Routes>
    )
}

export default AppRoutes
