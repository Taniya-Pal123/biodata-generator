import React, { useRef, useEffect } from 'react'
import { Route,Routes, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import BioData from './pages/BioData'

const App = () => {
  const appRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (!appRef.current) return;
    gsap.from(appRef.current, { opacity: 0, y: 10, duration: 0.35, ease: 'power1.out' });
  }, [location.pathname]);

  return (
    <div ref={appRef}>
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='Register' element={<Register/>}/>
         <Route path='biodata' element={<BioData/>}/>
      </Routes>
    </div>
  )
}

export default App
