import React from 'react'
import { useQuery } from 'react-query'
import axios  from 'Axios'
import {MdVerified} from 'react-icons/md'

const Featured = () => {
    const getFeaturedCars = () => {
        return axios.get("http://localhost:5001/featured")
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
            return ( <div className='bg-white w-80 md:w-72 h-80 mt-5 group cursor-pointer'
            key={item.id}>
                <img src={item.img} alt='cars' className='w-80 md:w-72 h-1/2 object-cover' />
                <section className='flex space-x-1 mx-3'>
                    <p>{item.year}</p>
                    <p>{item.title}</p>
                </section>
                <section className='flex justify-between items-center mx-4'>
                    <h3 className='text-lg font-semibold'>{item.name}</h3>
                    <section className='flex items-center space-x-1'>
                        <p className='text-[#2ECC71] font-bold hidden group-hover:block'>Verified</p>
                        <MdVerified size="1em" color="#2ECC71" className='hidden group-hover:block' />
                    </section>
                </section>
                <section className='flex space-x-1 mx-3'>
                    <p>Milage:{item.milage} </p>
                    <p>{item.capacity}</p>
                    <p>{item.transmission}</p>
                    <p>{item.fuel}</p>
                </section>
                <hr />
                <h2 className='text-2xl font-bold m-3'>KES {item.price}</h2>
            </div>)
        })}
    </div>
  )
}

export default Featured