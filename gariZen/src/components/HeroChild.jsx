import React from 'react'

const HeroChild = (props) => {
  return (
    <div className='text-black grid place-items-center py-3 md:p-10 hover:translate-y-2 cursor-pointer'>
        <div className='w-20 md:w-20 h-20 md:h-20 bg-basic rounded-full grid place-items-center mx-auto'>
            <div className='w-10 md:w-10 h-10 md:h-10 bg-primary rounded-full grid place-items-center'>
                {props.icon}
            </div>
        </div>
        <h2 className='my-5 font-bold text-lg'>{props.title}</h2>
        <p className='text-center'>{props.description}</p>
    </div>
  )
}

export default HeroChild