// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faRectangleList } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    
    return (
        <nav className='navbar'>
            <Link to="/" className='navbar-title'>The BeachHouse</Link>
            <div className='navbar-links'>
                <div>
                    {/* if () */}
                    <Link to="/bookings" className='booking-link'>
                        <FontAwesomeIcon icon={faRectangleList} size="2xl"/>
                        <span>All bookings</span>
                    </Link>
                </div>
                <div>
                    <Link to="/new" className='booking-link shake'>
                        <FontAwesomeIcon icon={faCalendarDays} size="2xl"/>
                        <span>Book now</span>
                    </Link>
                </div>
            </div>
        </nav>
    )

}

export default Navbar