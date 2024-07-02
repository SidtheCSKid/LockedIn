import React from 'react'
import NavbarWrapper from '../components/Navbar/NavbarWrapper'
import ClockWrapper from '../components/Clock/ClockWrapper'
import QuoteWrapper from '../components/Quote/QuoteWrapper'


const Home = () => {
  return (
    <div className="Home">
        <NavbarWrapper />
        <ClockWrapper />
        <QuoteWrapper/>
    </div>
  )
}

export default Home