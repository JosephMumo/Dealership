import React, { useState } from 'react'
import { useQuery} from 'react-query'
import axios from 'axios'
import CarChild from '../components/CarChild'
import Footer from '../components/Footer'
import { CiSearch } from "react-icons/ci"
import { MdOutlineKeyboardBackspace } from "react-icons/md";

function Cars() {
  const [filteredCars, setFilteredCars] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [show, setShow] = useState(true)

  function getCars() {
    return axios.get("http://localhost:5001/all")
  }
  const {isLoading, data, isError, error } = useQuery('allCars', getCars)


  const handleFilter = (e) => {
    e.preventDefault()
    const filtered = data?.data.filter(product => 
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setFilteredCars(filtered)
    setShow(false)
  }
  const handleBack = () => {
    setShow(true)
  }
  if(isLoading) {
    return(
      <div className='text-lg font-bold w-full py-2 text-center'>
        Loading...
      </div>
    )
  } else if (isError){
    return(
      <div className='text-lg font-bold w-full py-2 text-center'>
        `Error ${error}`
      </div>
    )
  }
  
  return (
    <>
    <div className='w-full p-4'>
      <h1 className="font-bold text-2xl sm:text-center md:text-left mx-5 md:text-3xl md:mx-20">Available Stock</h1>
      <form className='flex items-center space-x-2 mx-5 my-3 w-48 text-center md:text-left md:mx-20'>
        <input  type='text' placeholder='Search by make' onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} className= 'bg-basic py-1 px-2 md:24 lg:w-64 outline-none' />
        <button className='rounded-full hover:translate-y-1' onClick={handleFilter} >
          <CiSearch size={18} color='black' />
        </button>
      </form>
      { show
       ?
       null
       : 
        <div className='mx-5 md:mx-20 animate-bounce' onClick={handleBack}>
          <MdOutlineKeyboardBackspace size={24} />
        </div>
      }
    </div>
    <div className='w-full h-auto bg-gradient-to-t from-basic p-12 md:p-14  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:mt-0 place-items-center'>
        { show ?
        data?.data.map(item => {
          return ( <CarChild
              key={item.id}
              {...item}
          />)
        })
      : 
        filteredCars.map(item => {
          return ( <CarChild
                key={item.id}
                {...item}
             />
            )
        })
      }
    </div>
    <Footer />
    </>
  )
}

export default Cars