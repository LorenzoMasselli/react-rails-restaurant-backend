// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import { useParams, useNavigate, Link } from 'react-router-dom'

function BookingDetails() {
    const [booking, setBooking] = useState(null)
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        const fetchCurrentBooking = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_KEY}/${id}`)
                if (response.ok) {
                    const json = await response.json()
                    setBooking(json)
                    setLoading(false)
                } else {
                    throw response
                }
            } catch (e) {
                console.log("An error occured 2")
            } 
        }
        fetchCurrentBooking()
    },[id])

    if (loading) return <h2>Loading...</h2>
    return (
        <div>
            <div>Booking Details</div>
            <div className='booking-details-content'>
                <h3>Name: {booking.name}</h3>
                <h3>Booking date: {booking.date}</h3>
                <h3>Booking time: {booking.time}</h3>
                <h3>Number of people: {booking.quantity} people</h3>
                <h3>Email address: {booking.email}</h3>
                <h3>Phone number: {booking.phone}</h3>
                <h3>Instructions: {booking.note}</h3>
            </div>
            <Link to="/">Back to bookings</Link>
        </div>
    )
}

export default BookingDetails 