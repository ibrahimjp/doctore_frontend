import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Pharmacy from './components/Pharmacy/Pharmacy.jsx'
import Payment from './components/Payment/Payment.jsx'
import Price from './components/Price/Price.jsx'
import Footer from './components/Footer/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import FindDoctorPage from './components/FindDoctorPage/FindDoctorPage.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Doctor" element={<FindDoctorPage />} />
        <Route path="/Pharmacy" element={<Pharmacy />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Price" element={<Price />} />
      </Routes>
    </Router>
    <Footer/>
  </StrictMode>,
)
