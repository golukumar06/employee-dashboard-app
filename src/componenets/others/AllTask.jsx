import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const [userData,setUserData] = useContext(AuthContext)
    
  return (
    <div className='bg-[#1c1c1c] rounded p-5 mt-5  h-70 '>
        <div className='bg-red-500 mb-2 px-4 py-2 rounded flex justify-between'>
            <h3 className='w-1/5'>Employee Name</h3>
            <h3 className='w-1/5'>New Task</h3>
            <h5 className='w-1/5'>Completed</h5>
            <h5 className='w-1/5'>Active</h5>
            <h5 className='w-1/5'>Failed</h5>
        </div>
        
        <div className='h-[80%] overflow-auto '>
            {userData.map(function(elem,idx){
            return <div key={idx} className='border-2 border-emerald-500 mb-2 px-4 py-2 rounded  flex justify-between'>
            <h3 className='w-1/5'>{elem.firstName}</h3>
            <h3 className='w-1/5 text-blue-600'>{elem.taskCounts.newTask}</h3>
            <h5 className='w-1/5  text-green-700'>{elem.taskCounts.completed}</h5>
            <h5 className='w-1/5 text-yellow-600'>{elem.taskCounts.active}</h5>
            <h5 className='w-1/5 text-red-600'>{elem.taskCounts.failed}</h5>
            </div>
        })}
        </div>
        
            
        
        
    </div>
  )
}

export default AllTask
