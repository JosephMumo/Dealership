import React from 'react'
import { useQuery} from 'react-query'
import axios from 'axios'
import CarChild from '../components/CarChild'
import Footer from '../components/Footer'

function Cars() {
  function getCars() {
    return axios.get("http://localhost:5001/all")
  }
  const {isLoading, data, isError, error } = useQuery('allCars', getCars)
  if(isLoading) {
    return(
      <div className='text-lg font-bold'>
        Loading...
      </div>
    )
  } else if (isError){
    return(
      <div className='text-lg font-bold'>
        `Error ${error}`
      </div>
    )
  }
  return (
    <>
    <div className='w-full p-4'>
      <h1 className="font-bold text-2xl sm:text-center md:text-left mx-5 md:text-3xl md:mx-20">Find Your Car</h1>
    </div>
    <div className='w-full h-auto p-12 md:p-14  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:mt-0 place-items-center'>
        { data?.data.map(item => {
            return ( <CarChild
                key={item.id}
                {...item}
            />)
        })}
    </div>
    <Footer />
    </>
  )
}

export default Cars