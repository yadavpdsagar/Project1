import React, { useEffect, useState } from 'react';
import { deleteEmployee, listEmployees } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error("Error fetching employees:", error);
      });
  }, []);

  const addNewEmployee = () => {
    navigate('/add-employee');
  };

  const updateEmployee = (id) => {
    console.log("update id", id)
    navigate(`/edit-employee/${id}`);
  };
  const delEmployee = async (id) => {
    console.log("update id", id)
    const alertResp = confirm("Are you sure you want to delete?");
    if(alertResp){
      console.log(true)
      await deleteEmployee(id);
      setEmployees(employees.filter(employee => employee.emp_id!== id))
      // navigate(`/employees`);

    }
    else
      console.log(false)
  };


  return (
    <>
      <div className="text-center">
        <h1>List of Employees</h1>
      </div>
      <div className="container">
        <div className="p-2">
          <button
            type="button"
            className="btn btn-primary"
            onClick={addNewEmployee}
          >
            ADD Employee
          </button>
        </div>

        <table className="table table-bordered table-hover">
          <thead className="table-primary">
            <tr>
              <th>Employee Id</th>
              <th>Employee First name</th>
              <th>Employee Last name</th>
              <th>Email Id</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.emp_id}>
                <td>{employee.emp_id}</td>
                <td>{employee.emp_firstname}</td>
                <td>{employee.emp_lastname}</td>
                <td>{employee.emp_email}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => updateEmployee(employee.emp_id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => delEmployee(employee.emp_id)}
                  >
                    Delete
                  </button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListEmployeeComponent;



// import React, { useEffect, useState } from 'react';
// import { deleteEmployee, listEmployees } from '../services/EmployeeService';
// import { useNavigate } from 'react-router-dom';

// const ListEmployeeComponent = () => {
//   const [employees, setEmployees] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     listEmployees()
//       .then((response) => {
//         setEmployees(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching employees:", error);
//       });
//   }, []);

//   const addNewEmployee = () => {
//     navigate('/add-employee');
//   };

//   const updateEmployee = (id) => {
//     navigate(`/edit-employee/${id}`);
//   };

//   const delEmployee = async (id) => {
//     const alertResp = window.confirm("Are you sure you want to delete?");
//     if (alertResp) {
//       try {
//         await deleteEmployee(id);
//         setEmployees(employees.filter(employee => employee.emp_id !== id));
//       } catch (error) {
//         console.error("Error deleting employee:", error);
//       }
//     }
//   };

//   return (
//     <>
//       <div className="text-center">
//         <h1>List of Employees</h1>
//       </div>
//       <div className="container">
//         <div className="p-2">
//           <button
//             type="button"
//             className="btn btn-primary"
//             onClick={addNewEmployee}
//           >
//             ADD Employee
//           </button>
//         </div>

//         <table className="table table-bordered table-hover">
//           <thead className="table-primary">
//             <tr>
//               <th>Employee Id</th>
//               <th>Employee First name</th>
//               <th>Employee Last name</th>
//               <th>Email Id</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {employees.map((employee) => (
//               <tr key={employee.emp_id}>
//                 <td>{employee.emp_id}</td>
//                 <td>{employee.emp_firstname}</td>
//                 <td>{employee.emp_lastname}</td>
//                 <td>{employee.emp_email}</td>
//                 <td>
//                   <button
//                     className="btn btn-primary me-2"
//                     onClick={() => updateEmployee(employee.emp_id)}
//                   >
//                     Update
//                   </button>
//                   <button
//                     className="btn btn-danger"
//                     onClick={() => delEmployee(employee.emp_id)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default ListEmployeeComponent;
