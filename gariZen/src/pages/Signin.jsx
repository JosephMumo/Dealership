import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc"
import  Footer  from '../components/Footer'
import { appFunc } from '../context/AppContext'

const Signin = () => {
  const { signUp, logIn } = appFunc()
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ error, setError ] = useState('')
  

  const handleSignUp = async (e) => {
    e.preventDefault();
    try{ 
      await signUp(email, password)
      clearFields()
    }
    catch (e) {
      setError(e)
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try{
      await logIn(email, password)
      clearFields()
    }
    catch(e){
      setError(e)
    }
  }


  const clearFields = () => {
    setEmail("")
    setPassword("")
  }
  return (
    <>
    <div className='w-full grid place-items-center bg-white p-10 min-h-screen'>
      <div className='w-full md:w-[30%] p-5 md:py-10 rounded-lg border shadow-md'>
        <form className='w-full space-y-5'>
          <h1 className='font-bold text-lg'>Sign in to your account</h1>
          <input onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Enter your email' id='email' value={email} name='email' className='bg-basic h-10 rounded-sm outline-none px-2 w-full' />
          <input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' id='password' value={password} name='password' className='bg-basic h-10 rounded-sm outline-none px-2 w-full' />
          <div className=' w-full flex justify-end'>
            <a className='font-semibold line-through'>Forgot password?</a>
          </div>
          {error && <p className='text-red-500 italic'>{error.message}</p>}
          <button onClick={handleLogin} className='w-full py-2 bg-primary rounded-sm text-white hover:translate-y-1'>Log In</button>
          <p className='text-center'>New User?</p>
          <button  className='w-full py-2 border border-grey-100 hover:border-black rounded-sm text-black flex justify-center'>
            <span className='flex justify-around items-center w-1/2'>Sign up With Google <FcGoogle size={24}/></span>
          </button>
          <button onClick={handleSignUp} className='w-full py-2 rounded-sm text-white hover:text-black bg-black hover:bg-white hover:border hover:border-black'>Sign Up</button>
        </form>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Signin