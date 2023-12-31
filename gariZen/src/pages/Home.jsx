import React, { useState } from 'react'
import Landing from '../components/Landing'
import Featured from '../components/Featured'
import Recent from '../components/Recent'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import { appFunc } from '../context/AppContext'

function Home() {
  const { toggle1, setToggle1 }  = appFunc()
 
  return (
    <div className='bg-white'>
        <Landing />
        <div className='flex justify-center bg-basic rounded-3xl text-sm w-72 relative mt-56 md:mt-10 mx-auto space-x-2 py-2'>
          <button onClick={() => setToggle1(true)} className={toggle1 ? "py-1 px-4 bg-secondary  rounded-3xl text-white" : 'py-1 px-4 text-primary rounded-3xl'}>Featured Cars</button>
          <button onClick={() => setToggle1(false)} className={!toggle1 ? 'py-1 px-4 bg-secondary text-white rounded-3xl' :'py-1 px-4 text-primary rounded-3xl'}>Recent Listing</button>
        </div>
        { toggle1 && <Featured /> }
        { !toggle1 && <Recent /> }
        <h1 className='w-full text-center text-2xl font-bold'>Exceptional Experience</h1>
        <Hero />
        <Footer />
    </div>
  )
}

export default Home