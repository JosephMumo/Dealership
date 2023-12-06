import React, { useState } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { HiOutlineViewfinderCircle } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5"
import Modal from "react-modal"

const SpecialOffers = () => {
    const [ modalIsOpen, setModalIsOpen ] = useState(false);
    const [selected, setSelected] = useState(null)

    const openModal = (item) => {
        setSelected(item)
        setModalIsOpen(true)
    }

    const closeModal = () => {
        setModalIsOpen(false)
        setSelected(null)
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
        <h1 className='text-primary font-semibold text-lg'>Bestsellers</h1>
        <hr />
        <div className='w-full  grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 overflow-y-hidden'>
            {data?.data.map(item => {
                return (
                <div key={item.id} onClick={() => openModal(item)} className='bg-white w-80 md:w-90 h-64 group transition-all ease-in-out delay-200 relative px-5 mt-5 group cursor-pointer grid place-items-center border border-grey'>
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
                )
                
            })}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                className='w-[90%] h-[90%] fixed top-[90%] left-[90%] translate-x-[-95%] translate-y-[-90%] z-2 bg-white border'
            >
                <button onClick={closeModal} className='fixed right-2 z-10'>
                    <IoCloseOutline size={24} color='black'/>
                </button>
                {selected && <h1>{selected.name}</h1>}
            </Modal>
        </div>
    </div>
  )
}

export default SpecialOffers