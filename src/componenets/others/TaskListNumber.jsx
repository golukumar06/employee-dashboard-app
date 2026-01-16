import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex screen justify-between gap-5 mt-10'>
        <div className='bg-blue-500 rounded-xl w-[45%] py-6 px-9 '>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
            <h3 className='text-2xl font-medium'>New Task</h3>
        </div>
        <div className='bg-yellow-500 rounded-xl w-[45%] py-6 px-9 '>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
            <h3 className='text-2xl font-medium'> Completed Task</h3>
        </div>
        <div className='bg-pink-500 rounded-xl w-[45%] py-6 px-9 '>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2>
            <h3 className='text-2xl font-medium'>Accept Task</h3>
        </div>
        <div className='bg-red-500 rounded-xl w-[45%] py-6 px-9 '>
            <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
            <h3 className='text-2xl font-medium'>Failed Task</h3>
        </div>
      
    </div>
  )
}

export default TaskListNumber
