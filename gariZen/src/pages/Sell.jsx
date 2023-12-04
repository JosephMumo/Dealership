import { useState } from "react"
import React from 'react'
import ContactChild from "../components/ContactChild"
import Footer from "../components/Footer"
import ImageUploader from "../components/ImageUploader"

const Sell = () => {
  const [ active, setActive ] = useState(true)
  const [ active1, setActive1 ] = useState(false)
  const [ active2, setActive2 ] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [sellInfo, setSellInfo] = useState({
    registration: '',
    make: '',
    model: '',
    year: '',
    mileage: '',
    price: '',
    fname: '',
    lname: '',
    email: '',
    phone: ''
  })
  const [sellData, setSellData] = useState({})

  const handleChange = (event) => {
    const { name, value} = event.target
    setSellInfo(prev => {
      return ({ ...prev, [name] : value })
  })
  console.log(sellInfo)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    setSellData(sellInfo)
  }

  const handleActive = () => {
    setActive(true)
    setActive1(false)
    setActive2(false)
  }
  const handleActive1 = () => {
    setActive1(true)
    setActive(false)
    setActive2(false)
  }
  const handleActive2 = () => {
    setActive2(true)
    setActive(false)
    setActive1(false)
  }
  return (
    <>
    <div className='w-full p-4 bg-gradient-to-b from-basic'>
        <section className='sm:text-center md:text-left mx-5  md:mx-20 w-full md:w-1/3'>
          <h1 className='font-bold text-2xl md:text-3xl my-2'>Sell With Us</h1>
          <p className=''>We eliminate uncertainty and ensure that selling your 
            car is a straight-forward, smooth, and hassle-free experience.
            We guarantee security, convenience, and promptness.
          </p>
        </section>
        <div className='mx-5 md:mx-20 w-full flex flex-col md:flex-row md:space-x-10 my-5 md:my-10'>
          <section className='w-[90%] md:w-[45%]  flex flex-col space-y-10 mb-5 md:mb-0'>
            <ContactChild
              number = '1'
              name = 'Car Details'
              info = 'Vehicle Information'
              active={active}
              handleActive={handleActive}
            />
            <ContactChild 
              number = '2'
              name='Car Photos'
              info='Attach best shots.'
              active={active1}
              handleActive={handleActive1}
            />
            <ContactChild 
              number = '3'
              name = 'Owner Contact'
              info = 'Inform us of the best way to contact you'
              active={active2}
              handleActive={handleActive2}
            />
            
          </section>
          { active &&
            <section className='w-[90%] md:w-[45%] shadow-md bg-white rounded-lg h-auto'>
              <div className="w-full bg-primary h-16 p-5 rounded-t-lg">
                <h2 className="text-white text-xl font-semi-bold">Car Details</h2>
              </div>
              <form className="p-4 grid place-items-center space-y-5" onSubmit={handleSubmit}>
                <input onChange={handleChange} name="registration" value={sellInfo.registration} type="text" placeholder='Car Registration' className="bg-basic w-[90%] rounded-sm h-10 px-3 outline-none" />
                <select onChange={handleChange} name="make" value={sellInfo.make} className="bg-basic w-[90%] rounded-sm h-10 px-3 outline-none">
                  <option value="" disabled selected hidden>Make</option>
                  <option>Toyota</option>
                  <option>Subaru</option>
                  <option>Nissan</option>
                  <option>Volkswagen</option>
                </select>
                <input onChange={handleChange} value={sellInfo.model} name="model" placeholder="Model" className="bg-basic w-[90%] rounded-sm h-10 px-3 outline-none" />
                <input onChange={handleChange} type="number" value={sellInfo.year} name="year" min="2000" max="2099" placeholder="Date of Registration" className="bg-basic w-[90%] rounded-sm h-10 px-3 outline-none" />
                <input onChange={handleChange} name="mileage" value={sellInfo.mileage} type="number" placeholder='Mileage' className="bg-basic w-[90%] rounded-sm h-10 px-3 outline-none" />
                <input onChange={handleChange} name="price" value={sellInfo.price} type="number" min="100000" placeholder='Reserve Price' className="bg-basic w-[90%] rounded-sm h-10 px-3 outline-none" />
              </form>
            </section>
          }
          { active1 &&
            <section className='w-[90%] md:w-[45%] shadow-md bg-white rounded-lg'>
              <div className="w-full bg-primary h-16 p-5 rounded-t-lg">
                <h2 className="text-white text-xl font-semi-bold">Car Photos</h2>
              </div>
              <div className="space-y-5 p-2">
                <div className="my-1 mx-1 w-[99%] h-20 py-1 px-5">
                  <h4>Front</h4>
                  <ImageUploader
                    selectedImage={selectedImage}
                    setSelectedImage={setSelectedImage}
                  />
                </div>
                <div className="my-1 mx-1 w-[99%] h-20  py-1 px-5">
                  <h4>Sides</h4>
                  <ImageUploader
                    selectedImage={selectedImage}
                    setSelectedImage={setSelectedImage}
                  />
                </div>
                <div className="my-1 mx-1 w-[99%] h-20  py-1 px-5">
                  <h4>Rear</h4>
                  <ImageUploader
                    selectedImage={selectedImage}
                    setSelectedImage={setSelectedImage}
                  />
                </div>
                <div className="my-1 mx-1 w-[99%] h-20  py-1 px-5">
                  <h4>Interior</h4>
                  <ImageUploader
                    selectedImage={selectedImage}
                    setSelectedImage={setSelectedImage}
                  />
                </div>
              </div>
            </section>
          }
          { active2 &&
            <section className='w-[90%] md:w-[45%] shadow-md bg-white rounded-lg'>
              <div className="w-full bg-primary h-16 p-5 rounded-t-lg">
                <h2 className="text-white text-xl font-semi-bold">Owner Contact</h2>
              </div>
              <form className="p-4 grid place-items-center space-y-5" onSubmit={handleSubmit}>
                <input onChange={handleChange} name="fname" value={sellInfo.fname} type="text" placeholder="First Name" className="bg-basic w-[90%] rounded-sm h-10 px-3 outline-none" />
                <input onChange={handleChange} name="lname" value={sellInfo.lname} type="text" placeholder="Last Name" className="bg-basic w-[90%] rounded-sm h-10 px-3 outline-none" />
                <input onChange={handleChange} name="phone" value={sellInfo.phone} type="phone" placeholder="Phone" className="bg-basic w-[90%] rounded-sm h-10 px-3 outline-none" />
                <input onChange={handleChange} name="email" value={sellInfo.email} type="email" placeholder="Email" className="bg-basic w-[90%] rounded-sm h-10 px-3 outline-none" />
                <button className="py-2 bg-primary text-white px-7 rounded-2xl">Submit</button>
              </form>
            </section>
          }
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Sell