import { createSlice } from "@reduxjs/toolkit"; 

const initialState ={ 
     employeeData : [  
      { id: 1, name: "Rahul Sharma" ,  status : true },
      { id: 2, name: "Amit Verma"  ,  status : true },
      { id: 3, name: "Priya Patel" ,  status : true },
     ],
};  


const employeeSlice = createSlice({
     
      name : "Employee", 
      initialState,  
      reducers : {  

        addEmployee :(state , action)=>{ 

             state.employeeData.push(action.payload)
                
        },   

        deleteEmployee :(state , action) =>{
              state.employeeData = state.employeeData.filter( 
                (emp) => emp.id  !== action.payload
              );
        },   

        updateEmployee  : (state , action)=>{
             const {id  , name  , department  ,status} = action.payload;  
             const employee  =  state.employeeData.find( 
                (employee) => employee.id  === id); 
             
             if(employee){
                  employee.name = name; 
                  employee.department =  department; 
                  employee.status  = status
             }   
            
        },

        toggleEmployeeStatus : (state ,  action)=>{ 

            state.employeeData.status = !state.employeeData.status
        }
      }
})   


export const {addEmployee  , deleteEmployee , updateEmployee , toggleEmployeeStatus} = employeeSlice.actions; 
export default employeeSlice.reducer;




// Your first assignment is to create an employeeSlice with:

// Initial state containing three employees.

// addEmployee

// deleteEmployee

// updateEmployee

// toggleEmployeeStatus