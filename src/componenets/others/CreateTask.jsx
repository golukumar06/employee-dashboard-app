import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const[userData,setUserData] = useContext(AuthContext)

    const[taskTitle,setTaskTitle] = useState('')
    const[taskDescription,setTaskDescription] = useState('')
    const[taskDate,setTaskDate] = useState('')
    const[category,setCategory] = useState('')
    const[assignTo,setAssignTo] = useState('')

    const[newTask,setNewTask] = useState({})
    const submitHandler = (e)=>{
        e.preventDefault()

        const newTask = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false
    }

    const updatedUsers = userData.map(user => {
      if (user.firstName === assignTo) {
        return {
          ...user,
          tasks: [...user.tasks, newTask],
          taskCounts: {
            ...user.taskCounts,
            newTask: user.taskCounts.newTask + 1
          }
        }
      }
      return user
    })
    console.log(updatedUsers)

    setUserData(updatedUsers)

        
        setAssignTo('')
        setCategory('')
        setTaskDate('')
        setTaskTitle('')
        setTaskDescription('')

        
    }
  return (
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
        <form onSubmit={(e)=>{
            submitHandler(e)
        }} className='flex flex-wrap w-full items-start justify-between' >
            <div className='w-1/2'>
                <div>
                    <h3 className='text-sm font-semibold text-gray-300 mb-0.5'>Task Tittle</h3>
                    <input
                    value={taskTitle}
                    onChange={(e)=>{
                        setTaskTitle(e.target.value)
                    }}
                     className='text-sm px-2 py-1 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' placeholder='make a UI design' type="text" />
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                    <input
                     value={taskDate}
                     onChange={(e)=>{
                        setTaskDate(e.target.value)
                     }}
                    className='text-sm px-2 py-1 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' type="date" name="" id="" />
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
                    <input
                     value={assignTo}
                     onChange={(e)=>{
                        setAssignTo(e.target.value)
                     }}
                    className='text-sm px-2 py-1 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' placeholder='Employee Name' type="text" />
                </div>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                    <input 
                      value={category}
                      onChange={(e)=>{
                        setCategory(e.target.value)
                      }}
                    className='text-sm px-2 py-1 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' placeholder='design,dev,etc..' type="text" />
                </div>
            </div>
            <div className='w-2/5 flex flex-col items-start'>
                <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                <textarea
                  value={taskDescription}
                  onChange={(e)=>{
                    setTaskDescription(e.target.value)
                  }}
                className='w-full h-44 text-sm py-2 px-4 rounded outline-none border border-gray-400 bg-transparent' name="" id=""></textarea>
                <button className='bg-emerald-300 hover:bg-emerald-600 py-2 px-5 mt-4 rounded text-sm w-full text-black' type="submit">Create Task</button>
            </div>
        </form>
      </div>
  )
}

export default CreateTask
