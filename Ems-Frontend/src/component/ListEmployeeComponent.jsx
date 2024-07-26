import React from 'react'
import "../../public/App.css"
const ListEmployeeComponent = () => {

    const dummyData=[
        {    
            "emp_id":1,
         "emp_firstname": "tom  " ,
          "emp_lastname" : "diny2",
          "emp_email" : "tom@gamil.com"
             } , 
             {    
                "emp_id":2,
             "emp_firstname": "tom update " ,
              "emp_lastname" : "diny2",
              "emp_email" : "tom@gamil111more.com"
                 },
                 {    
                    "emp_id":3,
                 "emp_firstname": "tom mr " ,
                  "emp_lastname" : "ysadav",
                  "emp_email" : "tom@gamil111.com"
                     }

    ]
  return (
   <>
   <div className='container  '>
    <table class="table table-bordered table-hover">

    <thead class=" table-primary head-width ">
    <tr>
        <th>Employee First name  </th>
        <th>Employee last name  </th>
        <th>Email Id</th>
        <th>Employee Id  </th>
    </tr>

    </thead>
    <tbody>
        {
            dummyData.map(employee=>
                <tr key={employee.emp_id}>
                    
                    <td>{employee.emp_firstname}</td>
                    <td>{employee.emp_lastname}</td>
                    <td>{employee.emp_email}</td>
                    <td>{employee.emp_id}</td>


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


/*

 <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
     
    </tbody>
  </table>

*/