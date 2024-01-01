import React from 'react'

const Signin = () => {
  return (
    <div className='w-full grid place-items-center bg-white p-10'>
      <div className='w-full md:w-[30%] p-5 md:py-10 rounded-lg border shadow-md'>
        <form className='w-full space-y-5'>
          <h1 className='font-bold text-lg'>Welcome Back!</h1>
          <input type='email' placeholder='Enter your email' id='email' name='email' className='bg-basic h-10 rounded-sm outline-none px-2 w-full' />
          <input type='password' placeholder='Password' id='password' name='password' className='bg-basic h-10 rounded-sm outline-none px-2 w-full' />
          <div className=' w-full flex justify-end'>
            <a className='font-semibold line-through'>Forgot password?</a>
          </div>
          <button className='w-full py-2 bg-primary rounded-sm text-white hover:translate-y-1'>Log In</button>
          <p className='text-center'>Or</p>
          <button className='w-full py-2 border border-grey-100 hover:border-black rounded-sm text-black'>Log In With Google</button>
          <button className='w-full py-2 rounded-sm text-white hover:text-black bg-black hover:bg-white hover:border hover:border-black'>Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default Signin