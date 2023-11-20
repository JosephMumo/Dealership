import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';

const HeroChild = (props) => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div data-aos='flip-left' className=' grid place-items-center py-3 md:p-10'>
        <div className='w-24 md:w-28 h-24 md:h-28 bg-neutral-100 rounded-full grid place-items-center mx-auto'>
            <div className='w-12 md:w-16 h-12 md:h-16 bg-neutral-300 rounded-full grid place-items-center'>
                {props.icon}
            </div>
        </div>
        <h2 className='my-5 font-bold text-lg'>{props.title}</h2>
        <p className='text-center'>{props.description}</p>
    </div>
  )
}

export default HeroChild