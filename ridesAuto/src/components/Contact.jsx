import React, { useState } from 'react'

const Contact = () => {
    const [ message, setMessage ] = useState([])
    const [ user, setUser ] = useState({
        name: '',
        email: '',
        message: ''
    })
    const handleChange = (e) => {
        const {name, value } = e.target
        setUser(prev => {
            return (
                { ...prev, [name]: value}
            )
        })
        console.log(user)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setMessage(user)
        alert('message submitted!!')

        setUser({
            name: "",
            email: "",
            message: ""
        })

    }
  return (
    <>
    <h1 className='py-2 text-center font-extrabold text-4xl bg-[#f8f8f8]'>Contact</h1>
    <div className='w-full flex flex-col md:flex-row  bg-[#f8f8f8] py-1 items-center'>
        <form className='w-[85%]  flex flex-col md:ml-20 space-y-3' onSubmit={handleSubmit}>
            <input onChange={handleChange} className='h-9 bg-white px-3 rounded-md shadow-lg' type='text' name='name' id='name' value={user.name} placeholder='Your Name' />
            <input onChange={handleChange} className='h-9 bg-white px-3 rounded-md shadow-lg' type='email' name='email' id='email' value={user.email} placeholder='Your Email' />
            <textarea onChange={handleChange} className='h-48 bg-white px-3 rounded-md shadow-lg' name='message' id='message' value={user.message} placeholder='message' />
            <button className='py-1 px-3 bg-black text-white rounded-md'>Submit</button>
        </form>
        <div className='w-full flex justify-center'>
            <img src='https://ih1.redbubble.net/image.2823039514.9931/st,small,507x507-pad,600x600,f8f8f8.jpg' alt='car' />
        </div>
    </div>
    </>
  )
}

export default Contact