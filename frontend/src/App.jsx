import {BrowserRouter as Router } from "react-router-dom"
import './App.css'
// import BookingsList from './features/Bookings/BookingsList.jsx'
import Navbar from './features/Navbar/Navbar.jsx'
import AppRoutes from './features/AppRoutes/AppRoutes.jsx'
// import Cursor from './features/Cursor/Cursor.jsx'

function App() {

  return (
    <Router>
      <div className="app">
        <Navbar />
        <AppRoutes />
      </div>
    </Router>
  )
}

export default App
