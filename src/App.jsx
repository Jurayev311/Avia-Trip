import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import OurTeam from './components/ourTeam/OurTeam'
import Species from './components/species/Species'
import Hotels from './components/hotels/Hotels'
import Partners from './components/partners/Partners'
import Support from './components/support/Support'
import Tickets from './components/tickets/Tickets'
import FamousCity from './components/famousCity/FamousCity'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <About />
      <OurTeam />
      <Species />
      <Hotels />
      <Tickets />
      <FamousCity />
      <Partners />
      <Support />
      <Footer />
    </>
  )
}

export default App
