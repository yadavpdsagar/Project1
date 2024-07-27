import React ,{ useEffect, useState }from 'react'
import {  listEmployees } from '../services/EmployeeService'
const ListEmployeeComponent = () => {
const [employees, setEmployees]= useState([])
    useEffect(()=>{
listEmployees().then((Response) =>  {
 setEmployees(Response.data);
}).catch(error =>{
  console.error(error);
})
    },[])

  return (
   <>
   <div className='container  '>
    <table className="table table-bordered table-hover">

    <thead className=" table-primary  " >
    <tr>
         <th >Employee Id  </th>
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


