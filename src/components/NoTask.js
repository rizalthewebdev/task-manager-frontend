import React from 'react'

const NoTask = ({complete, unComplete}) => {
  return (
    <div className='w-full flex items-center justify-center'>
        <p>{`You don't have ${complete ? 'completed task' : unComplete ? 'uncomplete task' : "any task, Add task first"}`}</p>    
    </div>
  )
}

export default NoTask