import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import Failedtask from './Failedtask'
import NewTask from './NewTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='overflow-x-auto  h-[55%] w-full flex items-center justify-start gap-5 flex-nowrap py-5  mt-10'>
      {data.tasks.map((e,idx)=>{
        if(e.active){
          return <AcceptTask key={idx} data={e}/>
        }
        if(e.completed){
          return <CompleteTask key={idx} data={e}/>
        }
        if(e.failed){
          return <Failedtask key={idx} data={e}/>
        }
        if(e.newTask){
          return <NewTask key={idx} data={e}/>
        }
      })}
      
      
     
    </div>
  )
}

export default TaskList
