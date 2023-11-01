import React from 'react'
import Landing from '../components/Landing'
import Featured from '../components/Featured'
import Recent from '../components/Recent'
import { appFunc } from '../context/AppContext'

function Home() {
  const { toggle, setToggle } = appFunc()
  return (
    <div className='bg-white'>
        <Landing />
    </div>
  )
}

export default Home