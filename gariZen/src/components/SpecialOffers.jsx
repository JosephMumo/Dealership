import React, { useState } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { HiOutlineViewfinderCircle } from "react-icons/hi2";
import Modal from "react-modal"

const SpecialOffers = () => {
    const [ modalIsOpen, setModalIsOpen ] = useState(false);

    const openModal = () => {
        setModalIsOpen(true)
    }

    const closeModal = () => {
        setModalIsOpen(false)
    }
    const getOffers = () => {
        return axios.get("http://localhost:5001/Spares")
    }
    const { data, isLoading, isError, error } = useQuery('getOffer', getOffers)

    if(isLoading) {
        return <div className='text-center font-semibold p-2'>Loading . . .</div>
    }
    if(isError) {
        return <div className='text-center font-semibold p-2'>{error}</div>
    }
  return (
    <div className='py-2 px-5 space-y-2'>
        <h1 className='text-primary font-semibold text-lg'>Special Offers</h1>
        <hr />
        <div className='w-full  grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 overflow-y-hidden'>
            {data?.data.map(item => {
                return (
                    <>
                    <div key={item.id} onClick={openModal} className='bg-white w-80 md:w-90 h-64 group transition-all ease-in-out delay-200 relative px-5 mt-5 group cursor-pointer grid place-items-center border border-grey'>
                        <img className='w-24' src={item.imgUrl[0]} alt='' />
                        <h1 className='text-center'>{item.name}</h1>
                        <section className='w-full flex justify-between items-center'>
                            <h4>${item.price}</h4>
                            <button onClick={()=> alert(`Added ${item.name} to your cart`)} className="group-hover:bg-primary rounded-full p-2">
                                <CiShoppingCart size={18} />
                            </button>
                        </section>
                        <section className='group-hover:flex flex-col space-y-2 p-1 absolute top-2 right-4 hidden group'>
                            <button onClick={() => alert(`${item.name} added to your wishlist!`)} className='rounded-full p-2 bg-neutral-100 hover:bg-primary'>
                                <CiHeart size={18} />
                            </button>
                            <button onClick={openModal} className='rounded-full p-2 bg-neutral-100 hover:bg-primary'>
                                <HiOutlineViewfinderCircle size={18} />
                            </button>
                        </section>
                    </div>
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel="Example Modal"
                        className='w-[50%] h-[50%] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-2 bg-white border'
                    >
                        <button onClick={closeModal} className='bg-primary z-10'>Close</button>
                        <h1>{item.name}</h1>
                    </Modal>
                </>
                )
                
            })}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                className='w-[50%] h-[50%] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-2 bg-white border'
            >
                <button onClick={closeModal} className='bg-primary z-10'>Close</button>
                <h1>{data.name}</h1>
            </Modal>
        </div>
    </div>
  )
}

export default SpecialOffers