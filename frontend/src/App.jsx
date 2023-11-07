import { useState } from 'react';
import {BrowserRouter as Router } from "react-router-dom"
import './App.css'

import Navbar from './features/Navbar/Navbar.jsx'
import AppRoutes from './features/AppRoutes/AppRoutes.jsx'
// import User from './components/User'
// import PrivateText from './components/PrivateText'

function App() {
  // const [currUser, setCurrUser]=useState(null);

  return (
    <Router>
      <div className="app">
        {/* <User currUser={currUser} setCurrUser={setCurrUser} /> */}
        <Navbar />
        <AppRoutes />
      </div>
    </Router>
  )
}

export default App
