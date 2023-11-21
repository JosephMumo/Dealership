import { useState } from "react"
import React from 'react'
import ContactChild from "../components/ContactChild"
import Footer from "../components/Footer"

const Sell = () => {
  const [ active, setActive ] = useState(false)
  const [ active1, setActive1 ] = useState(false)
  const [ active2, setActive2 ] = useState(false)

  const handleActive = () => {
    setActive(prev => !prev)
    setActive1(false)
    setActive2(false)
  }
  const handleActive1 = () => {
    setActive1(prev => !prev)
    setActive(false)
    setActive2(false)
  }
  const handleActive2 = () => {
    setActive2(prev => !prev)
    setActive(false)
    setActive1(false)
  }
  return (
    <>
    <div className='w-full p-4 min-h-screen'>
        <section className='sm:text-center md:text-left mx-5  md:mx-20 w-full md:w-1/3'>
          <h1 className='font-bold text-2xl md:text-3xl my-2'>Sell With Us</h1>
          <p className=''>We eliminate uncertainty and ensure that selling your 
            car is a straight-forward, smooth, and hassle-free experience.
            We guarantee security, convenience, and promptness.
          </p>
        </section>
        <div className='mx-5 md:mx-20 w-full flex flex-col md:flex-row md:space-x-10 my-5 md:my-10'>
          <section className='w-[90%] md:w-[45%]  flex flex-col  space-y-10'>
            <ContactChild
              number = '1'
              name = 'Car Details'
              info = 'Vehicle Information'
              active={active}
              handleActive={handleActive}
            />
            <ContactChild 
              number = '2'
              name='Car Photos'
              info='Attach best shots.'
              active={active1}
              handleActive={handleActive1}
            />
            <ContactChild 
              number = '3'
              name = 'Owner Contact'
              info = 'Inform us of the best way to contact you'
              active={active2}
              handleActive={handleActive2}
            />
            
          </section>
          <section className='w-[90%] md:w-[45%] shadow-md'>2</section>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Sell