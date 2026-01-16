import React, { useState } from 'react'

const Header = (props) => {


  const logOut = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>Hello <br /><span className='text-4xl font-semibold'>Username ✌️</span></h1>
      <button onClick={logOut} className=' py-2 px-4 border-2 bg-[#920505] rounded-medium' type="submit">Log Out</button>
    </div>
  )
}

export default Header
