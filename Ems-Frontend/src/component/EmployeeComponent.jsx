import React, { useState } from 'react'
import {createEmployees} from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

 const EmployeeComponent = () => {
    const[emp_id, setemp_id ] = useState('')
   const[emp_firstname ,setemp_firstname ] = useState('')
   const[emp_lastname , setemp_lastname ] = useState('')
   const[emp_email, setemp_email ] = useState('')

  const[errors, setErrors]= useState({
    emp_id:"",
    emp_firstname:'',
    emp_lastname:'',
    emp_email:''
   })

   const navigetor = useNavigate();

   function saveEmployee(e){
    e.preventDefault();
    if(validateForm()){
        const employee ={emp_id, emp_firstname , emp_lastname , emp_email}
        console.log(employee)
    
        createEmployees(employee).then((Response)=>{
            console.log(Response.data);
            navigetor('/employees')
        })
        
    
      }

   }

 

  

function validateForm(){
    let valid =true;
    const errorscopy ={ ...errors}

    if(emp_id.trim()){
        errorscopy.emp_id='';
    } else{
        errorscopy.emp_id= "id  is required";
        valid =false;
    }


    if(emp_firstname.trim()){
        errorscopy.emp_firstname='';
    } else{
        errorscopy.emp_firstname= "first name is required";
        valid =false;
    }

    if(emp_lastname.trim()){
        errorscopy.emp_lastname='';
    } else{
        errorscopy.emp_lastname= "last name is required";
        valid =false;
    }

    if(emp_lastname.trim()){
        errorscopy.emp_email='';
    } else{
        errorscopy.emp_email= "Email is required";
        valid =false;
    }
    setErrors(errorscopy);
    return valid;

    
}


  return (
    <>
    <form>
      <div className="form-row">
      <div className="col-md-4 mb-3">
      <label >employee id </label>
      <input type="text"
       className={`form-control ${errors.emp_id ? 'is-invalid':''} `}
         placeholder="First name "
         value={emp_id}
         onChange={(e)=>{setemp_id(e.target.value);}}
         />
         {errors.emp_id&&<div className='invalid-feedback'> {errors.emp_id}</div>}
        </div>
      <div className="col-md-4 mb-3">
      <label >First name</label>
      <input type="text"
       className={`form-control ${errors.emp_firstname ? 'is-invalid':''} `}
         placeholder="First name"
         value={emp_firstname}
         onChange={(e)=>{setemp_firstname(e.target.value);}}
         />
         {errors.emp_firstname&&<div className='invalid-feedback'> {errors.emp_firstname}</div>}
        </div>
        <div className="col-md-4 mb-3">
        <label >Last name</label>
        <input type="text"
       className={`form-control ${errors.emp_lastname ? 'is-invalid':''} `}
         placeholder="Last name"
         value={emp_lastname}
         onChange={(e)=>{setemp_lastname(e.target.value);}}
         />
         {errors.emp_lastname &&<div className='invalid-feedback'> {errors.emp_lastname}</div>}
        </div>
        <div className="col-md-4 mb-3">
        <label > Email id</label>
        <input type="text"
       className={`form-control ${errors.emp_email ? 'is-invalid':''} `}
         placeholder="Email id"
         value={emp_email}
         onChange={(e)=>{setemp_email(e.target.value);}}
         />
         {errors.emp_email &&<div className='invalid-feedback'> {errors.emp_email}</div>}
        </div>
        </div>



<button className='btn btn-succes btn-primary' onClick={saveEmployee}> summit</button>
      
      
</form>
    </>
  )
}
export default EmployeeComponent