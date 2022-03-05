import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setModal } from "../features/modal";

const Input = ({modalInput, updateTask, updateId}) => {
    const dispatch = useDispatch()
    const [newTask, setNewTask] = useState('')

   function handleNewTask(e) {
      setNewTask(e.target.value)
   }
   const submitTask = async () => {
      await axios.post(process.env.REACT_APP_API_URL, {title: newTask})

      setNewTask('')
      dispatch(setModal(false))
      alert("Task added successfully")
   }

   return (
      <div className={`w-72 md:w-96 mx-auto ${modalInput ? 'flex' : 'hidden md:flex'} flex-col md:flex-row justify-center gap-3`}>
         <input
            type="text"
            title="Input Task"
            placeholder="What you want to do ?"
            className="input"
            onChange={handleNewTask}
            value={newTask}
            onKeyPress={(e) => e.key === 'Enter' && submitTask()}
         />
         <button className="button" type='submit' title="Add Task" onClick={() => submitTask()}>
            Add task
         </button>                  
      </div>
   );
};

export default Input;
