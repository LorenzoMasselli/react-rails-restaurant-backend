// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <Link to="/">Homepage</Link>
            {" | "}
            <Link to="/bookings">Bookings list</Link>
            {" | "}
            <Link to="/new">New Booking</Link>
        </nav>
    )

}

export default Navbar