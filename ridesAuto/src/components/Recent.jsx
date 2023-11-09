import React from 'react'
import { useQuery } from 'react-query'
import axios  from 'axios'
import CarChild from './CarChild'


const Recent = () => {
    const getFeaturedCars = () => {
        return axios.get("http://localhost:5001/Recent")
    }
    const {data, isLoading, isError, error } = useQuery('featured', getFeaturedCars)

    if( isLoading ) {
        return <div className='text-center mt-3 text-2xl font-bold'>Loading . . .</div>
    }
    if (isError) {
        return <div>{`Error: ${error}`}</div>
    }
  return (
    <div className='w-full h-auto p-12 md:p-14 bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:mt-0 mt-10 place-items-center'>
        { data?.data.map(item => {
            return ( <CarChild
                key={item.id}
                {...item}
            />)
        })}
    </div>
  )
}

export default Recent