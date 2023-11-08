// import { useState } from 'react';
import {BrowserRouter as Router } from "react-router-dom"
import './App.css'
import { useState } from "react"
import Navbar from './features/Navbar/Navbar.jsx'
import AppRoutes from './features/AppRoutes/AppRoutes.jsx'
import Footer from "./features/Footer/Footer.jsx"

function App() {
  const [currUser, setCurrUser]=useState(null);

  return (
    <Router>
      <div className="app">
        <Navbar currUser={currUser} setCurrUser={setCurrUser}/>
        <AppRoutes currUser={currUser} setCurrUser={setCurrUser}/>
        <Footer />
      </div>
    </Router>
  )
}

export default App
