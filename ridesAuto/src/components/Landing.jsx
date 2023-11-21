import React, {useEffect} from 'react'
import { appFunc } from '../context/AppContext'
import AOS from 'aos'
import 'aos/dist/aos.css';


const Landing = () => {
  const {menu} = appFunc()

  useEffect(() => {
    AOS.init()
    return( () => {
      AOS.refresh()
    })
  }, [])
  return (
    <div className='w-full h-[550px] z-10'>
        <img src='https://images.unsplash.com/photo-1539799139339-50c5fe1e2b1b?auto=format&fit=crop&q=80&w=1742&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='landing' className={ menu ? 'hidden' :'object-cover w-full h-screen md:max-h-[550px] '} />
        <div className={ menu ? 'hidden' :'absolute w-full h-screen md:h-[550px] top-14 md:top-24 bg-gradient-to-r from-black'}></div>
        <div className={ menu ? 'hidden' :'absolute w-full md:w-1/2 h-screen md:h-[550px] top-11 md:top-24 text-white font-bold flex flex-col align-center my-48 md:my-36 px-10 md:px-16'}>
          <h1 data-aos='fade-right' className='text-3xl md:text-4xl '>Where Every Mile Feels<br /> Like a Pleasure – Explore Our <br /> Premium Car Collection Now</h1>
          <section data-aos='fade-up' className='flex flex-row items-center text-white my-7 space-x-2 md:space-x-4'>
            <button className='bg-primary text-white p-2 px-4 rounded-3xl'>Browse Cars</button>
            <button className='bg-inherit p-2 px-4 rounded-3xl text-primary outline-dotted hover:outline outline-primary'>Sell your car</button>
          </section>
        </div>
    </div>
  )
}

export default Landing