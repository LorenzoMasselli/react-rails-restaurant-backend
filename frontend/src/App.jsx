import {BrowserRouter as Router } from "react-router-dom"
import './App.css'
// import BookingsList from './features/Bookings/BookingsList.jsx'
import Navbar from './features/Navbar/Navbar.jsx'
import AppRoutes from './features/AppRoutes/AppRoutes.jsx'

function App() {

  return (
    <Router>
      <div className="app">
        <Navbar />
        <AppRoutes />
        {/* <BookingsList /> */}
      </div>
    </Router>
  )
}

export default App
