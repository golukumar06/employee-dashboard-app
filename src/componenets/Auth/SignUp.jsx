import React, { useState } from 'react'
import Login from './Login'

const SignUp = () => {
    const[logIn,setLogIn] = useState(false)
    if(logIn){
        return <Login/>
    }
  return (
    <>
      <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-pink-400 border-2 p-15'>
            <h1 className='text-2xl font-bold mb-5'>Create Member</h1>
            <form  >
                <div className=' flex flex-col items-start '>
                    <h2 className='font-semibold mb-2'>Enter Name</h2>
                <input className='border rounded' type="text" placeholder='enter first name' />
                </div>
                <div className=' flex flex-col items-start mt-4 '>
                    <h2 className='font-semibold mb-2'>Enter Email</h2>
                <input className='border rounded  ' type="email" placeholder='enter email' />
                </div>
                <div className=' flex flex-col items-start mt-4'>
                    <h2 className='font-semibold mb-2'>Enter Password</h2>
                <input className='border rounded' type="password" placeholder='enter password' />
                </div>
                <div className=' flex flex-col items-start mt-4'>
                    <h2 className='font-semibold mb-2'>Comfirm Password</h2>
                <input className='border rounded ' type="text" placeholder='confirm password' />
                </div>

                <button className='bg-pink-500 w-full rounded mt-8 '>Sign Up</button>
            <button onClick={()=>setLogIn(true)} className='mt-4  bg-emerald-500 px-5 rounded'>Login</button>
            </form>

        </div>

      </div>
    </>
  )
}

export default SignUp
