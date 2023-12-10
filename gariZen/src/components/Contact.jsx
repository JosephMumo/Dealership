import React, { useState } from 'react'
import axios from 'axios'

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

        axios.post("http://localhost:5001/Messages", user)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
        alert('message submitted!!')

        setUser({
            name: "",
            email: "",
            message: ""
        })

    }
  return (
    <div className='w-full bg-basic flex flex-col md:flex-row md:py-5'>
        <div className='w-full grid grid-cols-1 place-items-center md:pr-5'>
            <h1 className='py-2 text-center font-extrabold text-2xl text-secondary'>Have an enquiry?</h1>
            <form className='w-[90%] flex flex-col md:ml-20 space-y-3 md:space-y-5' onSubmit={handleSubmit}>
                <input onChange={handleChange} className='h-10 bg-white px-3 rounded-md shadow-lg shadow-basic' type='text' name='name' id='name' value={user.name} placeholder='Your Name' />
                <input onChange={handleChange} className='h-10 bg-white px-3 rounded-md shadow-lg shadow-basic' type='email' name='email' id='email' value={user.email} placeholder='Your Email' />
                <textarea onChange={handleChange} className='h-48 md:h-56 bg-white px-3 rounded-md shadow-lg shadow-basic' name='message' id='message' value={user.message} placeholder='message' />
                <button className='py-1 px-3 bg-primary text-white rounded-md'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact