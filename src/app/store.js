import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/Counter/CounterSlice"   
import employeeReducer from  "../features/Employee/employeeSlice"

export const store  =  configureStore({
       
    reducer  :{
        counter : counterReducer, 
        employee : employeeReducer,
    },
});     
