import React ,{ useEffect, useState }from 'react'
import {  listEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'
const ListEmployeeComponent = () => {
const [employees, setEmployees]= useState([])
const navigator = useNavigate();

    useEffect(()=>{
listEmployees().then((Response) =>  {
 setEmployees(Response.data);
}).catch(error =>{
  console.error(error);
})
    },[])

    function addNewEmployee(){
  navigator('/add-employee')
    }

  return (
   <>
   <div className='text-center ' ><h1> List of Employees</h1></div>
   <div className='container  '>
    <div className='p-2  '>
    <button type="button" className="btn btn-primary  "  onClick={addNewEmployee}>ADD Employee</button>
    </div>
   
    <table className="table table-bordered table-hover">

    <thead className=" table-primary  " >
    <tr>
         <th>Employee Id  </th>
        <th>Employee First name  </th>
        <th>Employee last name  </th>
        <th>Email Id</th>
        
    </tr> 

    </thead>
    <tbody>
        {
            employees.map(employee=>
                <tr key={employee.emp_id}>
                    <td>{employee.emp_id}</td>
                    <td>{employee.emp_firstname}</td>
                    <td>{employee.emp_lastname}</td>
                    <td>{employee.emp_email}</td>
                </tr>

            )
        }
       
    </tbody>
    
    </table>
    
   </div>
   </>
  )
}

export default ListEmployeeComponent


