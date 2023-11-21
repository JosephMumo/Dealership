import React from 'react'
import { CiFacebook, CiInstagram, CiLinkedin, CiTwitter, CiYoutube } from 'react-icons/ci'
import { PiTiktokLogoThin } from 'react-icons/pi'

const Footer = () => {
  return (
    <>
        <div className='bg-basic p-7 md:p-10 grid grid-cols-1 md:grid-cols-2 place-items-center md:h-[250px]'>
            <section className='w-full md:w-[80%] p-2 my-2'>
                <h3 className='text-black text-2xl font-bold'>About Rides</h3>
                <br />
                <p className=' text-justify'>
                    Welcome to Rides Auto, where passion for automobiles meets exceptional service. Our mission is to offer a
                    curated selection of pre-owned and new cars, ensuring that each vehicle meets our rigorous standards for performance,
                    safety, and reliability. 
                </p>
            </section>
            <section className='w-full md:w-[80%] p-2 my-2'>
                <h3 className='text-black text-2xl font-bold'>Rides Newsletter</h3>
                <br />
                <p className='text-justify'>
                    Sign up to the Rides Auto newsletter to receive monthly updates in your inbox. We have exclusive deals, 
                    fuel vouchers, campaigns, and expert-written tips to help you keep your car in excellent shape.
                </p>
                <button className='bg-primary rounded-full p-1 px-4 text-white my-3'>Subscribe</button>
            </section>
        </div>
        <div className='bg-basic p-7 md:p-10 grid grid-cols-1 md:grid-cols-2 place-items-center md:h-[250px]'>
            <section className='w-full md:w-[80%] p-2 my-2'>
                <h3 className='text-black text-2xl font-bold'>Help and Support</h3>
                <br />
                <p className='text-base text-justify'>Monday to Friday 9AM - 5PM</p>
                <p className='text-base text-justify'>Saturdays 9AM - 1PM</p>
                <p className='text-base text-justify'>Sundays and Bank Holidays CLOSED</p>
                <br />
                <code className='text-sm text-justify'>** Prearranged viewings conducted outside of business hours **</code>
            </section>
            <section className='w-full md:w-[80%] p-2 my-2'>
                <h3 className='text-black text-2xl font-bold'>Contact</h3>
                <br />
                <p>Safaricom:</p>
                <p>Airtel:</p>
                <p>Email:</p>
                <section className='mt-1 flex justify-between w-[50%]'>
                    <a href='#'>
                        <CiFacebook size={24} />
                    </a>
                    <a href='#'>
                        <PiTiktokLogoThin size={24} />
                    </a>
                    <a href='#'>
                        <CiInstagram size={24} />
                    </a>
                    <a href='#'>
                        <CiLinkedin size={24} />
                    </a>
                    <a href='#'>
                        <CiTwitter size={24} />
                    </a>
                    <a href='#'>
                        <CiYoutube size={24} />
                    </a>
                </section>
            </section>
        </div>
    </>
  )
}

export default Footer