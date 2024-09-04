import React from 'react'
import Navbar from './components/Navbar'
import FIrstpage from './components/FIrstpage'
import About from './components/About'
import Testmonials from './components/Testmonials'
import Contact from './components/Contact'
import Services from './components/Services'
import Footer from './components/Footer'

const App = () => {
  return (
    <>  
    <div>
    <Navbar/>
    <FIrstpage/>
    <Services/>
    <Testmonials/>
    <About/>
    <Contact/>
    <Footer/>
    </div>
   
    </>

  )
}

export default App