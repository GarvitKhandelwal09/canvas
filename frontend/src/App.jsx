import { useState } from 'react'

import './App.css'
import Login from './components/login'
import Signup from './components/sighup'
import Home from './pages/home'
import Landingpage from './pages/landingpage'
import Navigation from './components/navigation'
import Footer from './components/footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/layout'
function App() {


  return (
<>
<Router>
   {/* NavLink is now inside the Router context */}
     {/* Add padding so nav doesn't cover content */}
        <Routes>
          <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
<Route element = {Layout}>
  <Route path="/" element={<Landingpage />} />
          <Route path="/home" element={<Home />} />
</Route>
          {/* Add your other routes here */}
        </Routes>
    </Router>
</>
  )
}

export default App
