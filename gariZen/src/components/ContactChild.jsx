import React from 'react'

const ContactChild = ({active, name, info, number, handleActive}) => {
  return (
    <div onClick={handleActive} className={active ? 'rounded-lg h-32 flex flex-row shadow-basic shadow-lg bg-white' : 'bg-white rounded-lg h-32 flex flex-row border border-neutral-200' }>
      <div className='h-full w-[20%] px-2 py-5 mr-5'>
        <div className={active ?  'w-16 h-16 bg-basic rounded-full grid place-items-center' : 'w-16 h-16 bg-neutral-50 rounded-full grid place-items-center'}>
          <div className={active ? 'w-11 h-11 bg-primary rounded-full text-white font-bold text-base grid place-items-center' : 'w-11 h-11 bg-neutral-200 rounded-full text-black font-bold text-base grid place-items-center'}>{number}</div>
        </div>
      </div>
      <section className='py-3'>
        <h1 className='font-bold text-lg my-2'>{name}</h1>
        <p>{info}</p>
      </section>
    </div>
  )
}

export default ContactChild