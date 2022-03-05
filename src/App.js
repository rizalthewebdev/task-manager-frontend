import React from "react";
import Hero from "./components/Hero";
import TaskTab from "./components/TaskTab";
import { BsPlusLg } from "react-icons/bs";
import ModalInput from "./components/ModalInput";
import { useDispatch } from "react-redux";
import { setModal } from "./features/modal";

const App = () => {
   const dispatch = useDispatch()

   return (
      <main className="w-screen h-screen flex flex-col items-center">
         <Hero />
         <TaskTab />
         <ModalInput/>
         <div
            className="fixed flex md:hidden items-center justify-center bottom-10 right-10 w-12 h-12 bg-gray-600 hover:bg-gray-800 text-gray-100 rounded-full cursor-pointer"
            title="Add Task"
            onClick={() => dispatch(setModal(true))}
         >
            <BsPlusLg fontSize={17} />
         </div>
      </main>
   );
};

export default App;
