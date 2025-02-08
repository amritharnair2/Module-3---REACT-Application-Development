import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Productdetails from '../pages/Productdetails'

function Productlayout() {
  return (
    <div>
      <div className="main">
        <Header title="Product Details"/>
        <div className="container content">
            <Productdetails/>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default Productlayout
