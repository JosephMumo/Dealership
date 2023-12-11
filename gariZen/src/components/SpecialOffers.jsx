import React, { useState } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { HiOutlineViewfinderCircle } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5"
import Modal from "react-modal"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

Modal.setAppElement("#root")

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
                        <h4 className ="font-bold">${item.price}</h4>
                        <button onClick={()=> alert(`Added ${item.name} to your cart`)} className="group-hover:bg-primary transition delay-100 rounded-full p-2">
                            <CiShoppingCart size={18} />
                        </button>
                    </section>
                    <section className='group-hover:flex flex-col space-y-2 p-1 absolute top-2 right-4 hidden group transition decoration-slate-300'>
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
                className='w-[90%] md:w-[70%]  fixed top-[90%] md:top-[70%] left-[90%] md:left-[70%] translate-x-[-95%] md:translate-x-[-70%] translate-y-[-90%] md:translate-y-[-70%] z-2 bg-white border border-black p-5'
            >
                <button onClick={closeModal} className='fixed right-4 z-10'>
                    <IoCloseOutline size={24} color='black'/>
                </button>
                {selected && 
                <div className='w-full flex flex-col md:flex-row'>
                    <div className='md:w-1/2  '>
                        <Carousel showArrows={false} className='w-full h-4/5 '>
                            <img src={selected.imgUrl[0]} alt='1' className=' object-scale-down w-32' />
                            <img src={selected.imgUrl[1]} alt='1' className=' object-scale-down w-32' />
                        </Carousel>
                    </div>
                    <div className='w-full md: p-5 space-y-3'>
                        <h1 className='text-2xl font-bold'>{selected.name}</h1>
                        <br />
                        <p>by: Brembo</p>
                        <p>{selected.description}</p>
                        <hr />
                        <h3 className='font-bold text-3xl my-2'>${selected.price}</h3>
                        <p>Availability: Stock <strong>{selected.stock}</strong></p>
                        <section className='flex w-full align-middle space-x-4'>
                            <button className='py-2 px-4 bg-primary'> Add to Cart</button>
                            <input type='number' max={selected.stock} min={1} className='outline outline-1 px-2' />
                        </section>
                        <p>Availability: In Stock</p>
                        <section className=''>
                            <h5 className='font-bold text-base'>Free delivery</h5>
                            <p>For all orders above $50</p>
                        </section>
                        <section className=''>
                            <h5 className='font-bold text-base'>Support 24/7</h5>
                            <p>Shop with an expert</p>
                        </section>
                        <section className=''>
                            <h5 className='font-bold text-base'>Return & Refund</h5>
                            <p>Free return over $200</p>
                        </section>
                        <section className=''>
                            <h5 className='font-bold text-base'>Secure Payment</h5>
                            <p>100% Protected</p>
                        </section>
                    </div>
                </div>
                }
            </Modal>
        </div>
    </div>
  )
}

export default SpecialOffers