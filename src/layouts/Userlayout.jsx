import React from 'react'
import Homepage from'../pages/Homepage'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Userlayout() {
  return (
    <>
      <div className='main'>
      <Header title="Fake Store" subtitle="Your one-stop shop for demo products" />
      <div className="container content">
            <Homepage/>
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default Userlayout
