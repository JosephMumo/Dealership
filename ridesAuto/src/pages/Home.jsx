import React, { useState } from 'react'
import Landing from '../components/Landing'
import Featured from '../components/Featured'
import Recent from '../components/Recent'
import { appFunc } from '../context/AppContext'

function Home() {
  const [ toggle, setToggle ]  = useState(true)
  return (
    <div className='bg-white'>
        <Landing />
        <div className='flex justify-center bg-blue-300 rounded-3xl w-72 relative mt-56 md:mt-10 mx-auto space-x-2 py-2'>
          <button onClick={() => setToggle(true)} className={toggle ? 'py-1 px-4 bg-blue-600  text-basic rounded-3xl' : 'py-1 px-4 text-basic rounded-3xl'}>Featured Cars</button>
          <button onClick={() => setToggle(false)} className={!toggle ? 'py-1 px-4 bg-blue-600 text-basic rounded-3xl' :'py-1 px-4 text-basic rounded-3xl'}>Recent Listing</button>
        </div>
        { toggle && <Featured /> }
        { !toggle && <Recent /> }
    </div>
  )
}

export default Home