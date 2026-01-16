import React from 'react'

const Failedtask = ({data}) => {
  return (
    <div className='shrink-0 h-full p-5 w-80 rounded-xl bg-red-500'> 
          <div className='flex items-center justify-between  '> 
            <h3 className='bg-red-600 py-1 px-3 text-sm '>{data.category}</h3>
            <h4 className='font-semibold'>{data.taskDate}</h4>
          </div>
          <h2 className='text-2xl font-semibold mt-5'>{data.taskTitle}</h2>
          <p className='text-sm mt-5'>{data.taskDescription}</p>

         <button className='bg-pink-500 rounded w-full  text-sm font-bold px-1.5 mt-6'>Failed</button>
         
      </div>
  )
}

export default Failedtask
