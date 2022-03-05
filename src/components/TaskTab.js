import React, { Fragment, useEffect } from "react";
import { Tab } from "@headlessui/react";
import Task from "./Task";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { allTask } from "../features/task";
import NoTask from "./NoTask";

const TaskTab = () => {
   const dispatch = useDispatch()
   const allTasks = useSelector((state) => state.task.value)
   const all = allTasks
   const completedTask = allTasks.filter((item) => item.isComplete)
   const unCompletedTask = allTasks.filter((item) => !item.isComplete)

   useEffect(
      () => 
         axios.get(process.env.REACT_APP_API_URL).then((res) => {
            dispatch(allTask(res.data.tasks))
         }),
      [dispatch, allTasks]
   );

   function classNames(...classes) {
      return classes.filter(Boolean).join(" ");
   }

   return (
      <Tab.Group>
         <Tab.List
            className="w-[300px] md:w-96 max-w-md md flex justify-between task-tab--list"
            title="Tab Task"
         >
            <Tab as={Fragment} title="All Task">
               {({ selected }) => (
                  <button
                     className={`${
                        selected
                           ? "button bg-gray-800"
                           : "hover:underline underline-offset-2"
                     } task-tab--button`}
                  >
                     All
                  </button>
               )}
            </Tab>
            <Tab as={Fragment} title="Completed Task">
               {({ selected }) => (
                  <button
                     className={`${
                        selected
                           ? "button bg-gray-800"
                           : "hover:underline underline-offset-2"
                     } task-tab--button`}
                  >
                     Completed
                  </button>
               )}
            </Tab>
            <Tab as={Fragment} title="Uncompleted Task">
               {({ selected }) => (
                  <button
                     className={`${
                        selected
                           ? "button bg-gray-800"
                           : "hover:underline underline-offset-2"
                     } task-tab--button`}
                  >
                     Uncompleted
                  </button>
               )}
            </Tab>
         </Tab.List>
         <Tab.Panels className={classNames("mt-5 w-[300px] md:w-96 max-w-md")}>
            <Tab.Panel className={classNames("w-full")}>
               {all.map((task) => (
                  <Task
                     key={task._id}
                     id={task._id}
                     title={task.title}
                     isComplete={task.isComplete}
                  />
                  ))
               }
               {all.length < 1 ? (
                  <NoTask />
               ) : (
               <div className="total-task">
                  <p>Total task : {all.length}</p>
               </div>
               )}
            </Tab.Panel>
            <Tab.Panel className={classNames("w-full")}>
               {completedTask.map((task) => (
                     <Task
                        key={task._id}
                        id={task._id}
                        title={task.title}
                        isComplete={task.isComplete}
                     />   
                  ))
               }
               {completedTask.length < 1 ? (
                  <NoTask complete/>
               ) : (
               <div className="total-task">
                  <p>Total task : {completedTask.length}</p>
               </div>
               )}
            </Tab.Panel>
            <Tab.Panel className={classNames("w-full")}>
               {unCompletedTask.map((task) => (
                     <Task
                        key={task._id}
                        id={task._id}
                        title={task.title}
                        isComplete={task.isComplete}
                     />
                  ))
               }
               {unCompletedTask.length < 1 ? (
                  <NoTask unComplete/>
               ) : (
                  <div className="total-task">
                     <p>Total task : {unCompletedTask.length}</p>
                  </div>
               )}
            </Tab.Panel>
         </Tab.Panels>
      </Tab.Group>
   );
};

export default TaskTab;
