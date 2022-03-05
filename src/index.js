import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import {Provider} from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'
import taskReducer from './features/task'
import modalReducer from "./features/modal";

const store = configureStore({
   reducer: {
      task: taskReducer,
      modal: modalReducer
   }
})

ReactDOM.render(
   <React.StrictMode>
      <Provider store={store}>
         <App />
      </Provider>
   </React.StrictMode>,
   document.getElementById("root")
);
