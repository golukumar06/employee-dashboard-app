import React, { useState } from 'react'
import CompleteTask from './CompleteTask'
import Failedtask from './Failedtask'

const AcceptTask = ({data}) => {
    
  const[status,setStatus] = useState('accepted')
  
  return (

    <>
    {status==='completed' && <CompleteTask data={data}/>}
    {status==='failed' && <Failedtask data={data}/>}
      { status ==='accepted' &&
        (<div className='shrink-0 h-full p-5 w-80 rounded-xl bg-pink-500'> 
          <div className='flex items-center justify-between  '> 
            <h3 className='bg-red-600 py-1 px-3 text-sm'>{data.category}</h3>
            <h4 className='font-semibold'>{data.taskDate}</h4>
          </div>
          <h2 className='text-2xl font-semibold mt-5'>{data.taskTitle}</h2>
          <p className='text-sm mt-5'>{data.taskDescription}</p>

          <div className='flex justify-between mt-6'>
          <button onClick={()=>setStatus('completed')} className='bg-emerald-500  px-1.5 rounded text-sm'>Mark as completed</button>
          <button onClick={()=>setStatus('failed')} className='bg-red-500 px-1.5 rounded text-sm'>Mark as failed</button>
          </div>
      </div>)}
    </>
  )
}

export default AcceptTask
