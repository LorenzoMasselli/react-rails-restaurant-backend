// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './Bookings.css'

function BookingEditForm() {
    const [booking, setBooking] = useState(null)
    const { id } = useParams();
    const [, setLoading] = useState(true);
    const [, setError] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        const fetchCurrentBooking = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_KEY}/${id}`);
                if (response.ok) {
                  const json = await response.json();
                  setBooking(json);
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
        fetchCurrentBooking()
    }, [id])
    
      const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`${import.meta.env.VITE_API_KEY}/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({
                    name: booking.name,
                    phone: booking.phone,
                    email: booking.email,
                    date: booking.date,
                    time: booking.time,
                    quantity: booking.quantity,
                    note: booking.note,
                    confirmed: booking.confirmed,
                })
            })

            if (response.ok) {
                const { id } = await response.json()
                navigate(`/bookings/${id}`)
            } else {
                throw response
            }
        } catch(e) {
            console.log("An error occured")
        }
      }
    
    if (!booking) return <h2>Loading...</h2>  

    return (
        <div>
            <h2>Edit Booking</h2>
            <form onSubmit={handleSubmit}>
                <div className="name">
                    <label htmlFor="name-input">Full name: </label>
                    <input 
                        type="text" 
                        id="name-input"
                        value={booking.name}
                        onChange={(e) => setBooking({...booking, name: e.target.value})}
                        />
                </div>
                <div className="phone">
                    <label htmlFor="phone-input">Phone: </label>
                    <input 
                        type="text" 
                        id="phone-input"
                        value={booking.phone}
                        onChange={(e) => setBooking({...booking, phone: e.target.value})}
                        />
                </div>
                <div className="email">
                    <label htmlFor="email-input">Email: </label>
                    <input 
                        type="text" 
                        id="email-input"
                        value={booking.email}
                        onChange={(e) => setBooking({...booking, email: e.target.value})}
                        />
                </div>
                <div className="date-time">
                    <div className="date">
                        <label htmlFor="date-input">Date (format: yyyy/mm/dd): </label>
                        <input 
                            type="text" 
                            id="date-input"
                            value={booking.date}
                            onChange={(e) => setBooking({...booking, date: e.target.value})}
                            />
                    </div>
                    <div className="quantity">
                        <label htmlFor="quantity-input">Number of people: </label>
                        <select 
                            type="text"
                            id="quantity-input"
                            value={booking.quantity}
                            onChange={(e) => setBooking({...booking, quantity: Number(e.target.value)})}                            
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                    <div className="time">
                        <label htmlFor="time-input">Time: </label>
                        <select 
                            type="text" 
                            id="time-input"
                            value={booking.time}
                            onChange={(e) => setBooking({...booking, time: e.target.value})}
                        >
                            <option value="12:00">12:00</option>
                            <option value="12:30">12:30</option>
                            <option value="13:00">13:00</option>
                            <option value="13:30">13:30</option>
                            <option value="14:00">14:00</option>
                            <option value="14:30">14:30</option>
                            <option value="15:00">15:00</option>
                            <option value="15:30">15:30</option>
                            <option value="16:00">16:00</option>
                            <option value="16:30">16:30</option>
                            <option value="17:00">17:00</option>
                            <option value="17:30">17:30</option>
                            <option value="18:00">18:00</option>
                            <option value="18:30">18:30</option>
                            <option value="19:00">19:00</option>
                            <option value="19:30">19:30</option>
                            <option value="20:00">20:00</option>
                            <option value="20:30">20:30</option>
                            <option value="21:00">21:00</option>
                        </select>
                    </div>
                </div>
                <div className="note">
                    <label htmlFor="note-input">notes: </label>
                    <textarea 
                        id="note-input"
                        value={booking.note}
                        onChange={(e) => setBooking({...booking, note: e.target.value})}
                        placeholder="Dietary Restrictions / Reservation Notes"
                        />
                </div>
                <div className="confirmed">
                    <label htmlFor="confirmed-input">Confirmed(T/F): </label>
                    <select 
                        type="text"
                        id="confirmed-input"
                        value={booking.confirmed}
                        onChange={(e) => setBooking({...booking, confirmed: e.target.value})}                            
                    >
                        <option value="true">True</option>
                        <option value="false">False</option>
                    </select>
                </div>
                <div>
                    <button className="form-button" type="submit">Save your edit</button>
                </div>
           </form>
        </div>
    )
}

export default BookingEditForm