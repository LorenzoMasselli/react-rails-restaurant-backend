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
            <h2>1 {booking.name}</h2>
            <h2>2 {booking.quantity} people</h2>
            <h3>3 {booking.email}</h3>
            <h3>4 {booking.phone}</h3>
            <h3>5 Instruction: {booking.note}</h3>
            <h3>6 time: {booking.time}</h3>
            <Link to="/">Back to bookings</Link>
        </div>
    )
}

export default BookingDetails 