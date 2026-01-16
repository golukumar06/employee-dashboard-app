import React, { useState } from 'react'
import AcceptTask from './AcceptTask'

const NewTask = ({data}) => {

  const[completed,setCompleted] = useState(false)
  return (
    <>
    {completed ?( <AcceptTask data={data}/>):
    (<div className='shrink-0 h-full p-5 w-80 rounded-xl bg-blue-500'> 
    <div className='flex items-center justify-between  '> 
      <h3 className='bg-red-600 py-1 px-3 text-sm'>{data.category}</h3>
      <h4 className='font-semibold'>{data.taskDate}</h4>
    </div>
    <h2 className='text-2xl font-semibold mt-5'>{data.taskTitle}</h2>
    <p className='text-sm mt-5'>{data.taskDescription}</p>

    <button onClick={()=>setCompleted(true)} className='bg-green-500 rounded text-sm font-semibold px-1.5 mt-6'>Accept Task</button>
</div>)}
</>
  )
}

export default NewTask
