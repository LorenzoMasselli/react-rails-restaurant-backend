// API comes from .env.development file 
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Bookings.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

function BookingsList() {
    const [bookings, setBookings] = useState([]);
    const [, setLoading] = useState(true);
    const [, setError] = useState(null)
    //  fetch bookings from API
    useEffect(() => {
        async function loadBookings() {
          try {
            const response = await fetch(import.meta.env.VITE_API_KEY);
            if (response.ok) {
              const json = await response.json();
              // Convert the string dates to the YYYY-MM-DD format
              const sortedBookings = json.map((booking) => {
                const date = booking.date.split("/").join("-");
                booking.date = date;
                return booking;
              });
      
              // Sort the booking objects by date
              sortedBookings.sort((a, b) => {
                const dateA = new Date(a.date + " " + a.time);
                const dateB = new Date(b.date + " " + b.time);
                return dateA - dateB;
              });
      
              setBookings(sortedBookings);
            } else {
              throw response;
            }
          } catch (e) {
            setError('An error occured');
            console.log('An error occured');
          } finally {
            setLoading(false);
          }
        }
        loadBookings();
      }, []);
    return (
        <div className='booking-container'>
            {bookings.map((booking) => (
                <Link to={`/bookings/${booking.id}`} key={booking.id} className='bookings-list'>
                    <div className="booking-activity" style={{position: 'relative'}}>
                        <h3>{booking.name} ({booking.quantity})</h3>
                        <FontAwesomeIcon icon={faCircle} style={{color: booking.confirmed ? 'green' : 'red', position: 'absolute', top: '7px', right: '7px'}}/>
                    </div>
                    <h4 className='booking-time'>{booking.date} | {booking.time}</h4>
                </Link>
            ))}
        </div>
    )

}

export default BookingsList