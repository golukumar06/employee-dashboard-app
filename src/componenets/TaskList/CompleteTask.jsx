import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='shrink-0 h-full p-5 w-80 rounded-xl bg-yellow-500'> 
          <div className='flex items-center justify-between  '> 
            <h3 className='bg-red-600 py-1 px-3 text-sm'>{data.category}</h3>
            <h4 className='font-semibold'>{data.taskDate}</h4>
          </div>
          <h2 className='text-2xl font-semibold mt-5'>{data.taskTitle}</h2>
          <p className='text-sm mt-5'>{data.taskDescription}</p>

          <button className='bg-blue-500 mt-6 px-1.5 w-full rounded'>Completed</button>
      </div>
  )
}

export default CompleteTask
