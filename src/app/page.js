import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import AboutUs from './components/about'
import Menu from './components/menu'
import Services from './components/service'
import ContactUs from './components/contact'
import Footer from './components/footer'

const index = () => {
  return (
    <>
    <main>
      <Navbar />
      <Hero />
      <AboutUs />
      <hr />
      <Menu />
      <Services />
      <ContactUs />
      <Footer />
    </main>
    </>
  )
}

export default index