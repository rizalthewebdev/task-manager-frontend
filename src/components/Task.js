import axios from "axios";
import React, { useState } from "react";
import { AiTwotoneEdit } from "react-icons/ai";
import { IoMdTrash } from "react-icons/io";
import {RiCheckFill, RiCloseLine } from 'react-icons/ri'

const Task = ({ id, title, isComplete }) => {
   const [update, setUpdate] = useState('')
   const [updateBlock, setUpdateBlock] = useState(false)

   const reqUpdate = async (updateId) => {
      setUpdateBlock(true)
      await axios.get(`${process.env.REACT_APP_API_URL}/${updateId}`).then((res) => setUpdate(res.data.task.title))
   }

   const submitUpdate = async (id) => {
      await axios.patch(`${process.env.REACT_APP_API_URL}/${id}`, {
         title: update
      })
      alert("Task updated successfully")
      setUpdateBlock(false)
   }

   const handleChange = (e) => {
      isComplete ? e.target.checked = false : e.target.checked = true
   }

   const handleComplete = async (id) => {
      await axios.patch(`${process.env.REACT_APP_API_URL}/${id}`, {
         isComplete: !isComplete
      })
   }

   const handleDelete = async (id) => {
      if(window.confirm("Delete this task ?")){
         await axios.delete(`${process.env.REACT_APP_API_URL}/${id}`)
         
         alert("Task deleted successfully")
      }
   }

   return (
      <div className="w-full flex justify-between items-center p-3 mb-1.5 border border-gray-300 rounded-md shadow-md" title={`${title}`}>
         <div className="flex space-x-2">
            <input type="checkbox" checked={isComplete} onChange={(e) => {handleChange(e)}} onClick={() => handleComplete(id)}/>
            {updateBlock ? (
               <input type="text" className="outline-none ring-1 ring-gray-600 focus:ring-gray-900 rounded-sm max-w-[175px]" onChange={(e) => setUpdate(e.target.value)} value={update} />
            ) : (
               <h1>{title}</h1>               
            )}

         </div>
         <div className="flex space-x-2">
            {updateBlock ? (
               <>
                  <div className="update-button--wrapper" title="Done" onClick={() => submitUpdate(id)}>
                     <RiCheckFill className="update-button--icon" />
                  </div>
                  <div className="update-button--wrapper" title="Cancel" onClick={() => setUpdateBlock(false)}>
                     <RiCloseLine className="update-button--icon" />
                  </div>
               </>
            ) : (
               <>
                  <div className="task-button--wrapper" title="Edit task" onClick={() => {reqUpdate(id)}}>
                     <AiTwotoneEdit className="task-button--icon" />
                  </div>
                  <div className="task-button--wrapper" title="Delete task" onClick={() => handleDelete(id)}>
                     <IoMdTrash className="task-button--icon" />
                  </div>
               </>
            )}
         </div>
      </div>
   );
};

export default Task;
