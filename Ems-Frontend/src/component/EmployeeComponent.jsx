import React, { useState, useEffect } from 'react';
import { createEmployees, getEmployee, updateEmployee } from '../services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

const EmployeeComponent = () => {
  const [emp_id, setEmp_id] = useState('');
  const [emp_firstname, setEmp_firstname] = useState('');
  const [emp_lastname, setEmp_lastname] = useState('');
  const [emp_email, setEmp_email] = useState('');
  const { id } = useParams();
  const [errors, setErrors] = useState({
    emp_id: '',
    emp_firstname: '',
    emp_lastname: '',
    emp_email: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    console.log("id", id)
    if (id) {
      getEmployee(id)
        .then((response) => {
          console.log("Fetched employee data:", response.data);
          setEmp_id(response.data.emp_id);
          setEmp_firstname(response.data.emp_firstname);
          setEmp_lastname(response.data.emp_lastname);
          setEmp_email(response.data.emp_email);
        })
        .catch((error) => {
          console.error("Error fetching employee:", error);
        });
        
    }
  }, [id]);



  const saveEmployee = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const employee = { emp_id, emp_firstname, emp_lastname, emp_email };
      console.log("Saving employee:", employee);

      if (id) {
        updateEmployee(id, employee).then((response) => {
          console.log("Updated employee data:", response.data);
          navigate('/employees');
        })
      } else {
        createEmployees(employee).then((response) => {
          console.log("Created employee data:", response.data);
          navigate('/employees');
        });
      }
    }
  };

  const validateForm = () => {
    let valid = true;
    const errorsCopy = { ...errors };

    // if (emp_id.trim()) {
    //   errorsCopy.emp_id = '';
    // } else {
    //   errorsCopy.emp_id = 'ID is required';
    //   valid = false;
    // }

    if (emp_firstname.trim()) {
      errorsCopy.emp_firstname = '';
    } else {
      errorsCopy.emp_firstname = 'First name is required';
      valid = false;
    }

    if (emp_lastname.trim()) {
      errorsCopy.emp_lastname = '';
    } else {
      errorsCopy.emp_lastname = 'Last name is required';
      valid = false;
    }

    if (emp_email.trim()) {
      errorsCopy.emp_email = '';
    } else {
      errorsCopy.emp_email = 'Email is required';
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  };

  return (
    <>
      <form>
        <div>
          <div className="form-row">
            <div>
              <h2 className="text-center">{id ? 'Edit Employee' : 'Add Employee'}</h2>
            </div>
            <div className="col-md-4 mb-3">
              <label>Employee ID</label>
              <input
                type="number"
                className={`form-control ${errors.emp_id ? 'is-invalid' : ''}`}
                placeholder="ID"
                value={emp_id}
                onChange={(e) => setEmp_id(e.target.value)}
                disabled={!!id} // Disable ID field if editing
              />
              {errors.emp_id && <div className="invalid-feedback">{errors.emp_id}</div>}
            </div>
            <div className="col-md-4 mb-3">
              <label>First Name</label>
              <input
                type="text"
                className={`form-control ${errors.emp_firstname ? 'is-invalid' : ''}`}
                placeholder="First name"
                value={emp_firstname}
                onChange={(e) => setEmp_firstname(e.target.value)}
              />
              {errors.emp_firstname && <div className="invalid-feedback">{errors.emp_firstname}</div>}
            </div>
            <div className="col-md-4 mb-3">
              <label>Last Name</label>
              <input
                type="text"
                className={`form-control ${errors.emp_lastname ? 'is-invalid' : ''}`}
                placeholder="Last name"
                value={emp_lastname}
                onChange={(e) => setEmp_lastname(e.target.value)}
              />
              {errors.emp_lastname && <div className="invalid-feedback">{errors.emp_lastname}</div>}
            </div>
            <div className="col-md-4 mb-3">
              <label>Email ID</label>
              <input
                type="email"
                className={`form-control ${errors.emp_email ? 'is-invalid' : ''}`}
                placeholder="Email"
                value={emp_email}
                onChange={(e) => setEmp_email(e.target.value)}
              />
              {errors.emp_email && <div className="invalid-feedback">{errors.emp_email}</div>}
            </div>
          </div>
          <button className="btn btn-success btn-primary" onClick={saveEmployee}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default EmployeeComponent;









// import React, { useState, useEffect } from 'react';
// import { createEmployees, getEmployee, updateEmployee } from '../services/EmployeeService';
// import { useNavigate, useParams } from 'react-router-dom';

// const EmployeeComponent = () => {
//   const [employee, setEmployee] = useState({
//     emp_id: '',
//     emp_firstname: '',
//     emp_lastname: '',
//     emp_email: ''
//   });
//   const [errors, setErrors] = useState({});
//   const { id } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (id) {
//       const fetchEmployee = async () => {
//         try {
//           const response = await getEmployee(id);
//           setEmployee({
//             emp_id: response.data.emp_id,
//             emp_firstname: response.data.emp_firstname,
//             emp_lastname: response.data.emp_lastname,
//             emp_email: response.data.emp_email
//           });
//         } catch (error) {
//           console.error("Error fetching employee:", error);
//         }
//       };
//       fetchEmployee();
//     }
//   }, [id]);

//   const validateForm = () => {
//     let valid = true;
//     const errorsCopy = {};

//     if (!employee.emp_firstname.trim()) {
//       errorsCopy.emp_firstname = 'First name is required';
//       valid = false;
//     }

//     if (!employee.emp_lastname.trim()) {
//       errorsCopy.emp_lastname = 'Last name is required';
//       valid = false;
//     }

//     if (!employee.emp_email.trim()) {
//       errorsCopy.emp_email = 'Email is required';
//       valid = false;
//     }

//     setErrors(errorsCopy);
//     return valid;
//   };

//   const saveEmployee = async (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       try {
//         if (id) {
//           await updateEmployee(id, employee);
//           console.log("Updated employee data:", employee);
//         } else {
//           await createEmployees(employee);
//           console.log("Created employee data:", employee);
//         }
//         navigate('/employees');
//       } catch (error) {
//         console.error("Error saving employee:", error);
//       }
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEmployee(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   return (
//     <>
//       <form onSubmit={saveEmployee}>
//         <div>
//           <div className="form-row">
//             <div>
//               <h2 className="text-center">{id ? 'Edit Employee' : 'Add Employee'}</h2>
//             </div>
//             <div className="col-md-4 mb-3">
//               <label>Employee ID</label>
//               <input
//                 type="number"
//                 className={`form-control ${errors.emp_id ? 'is-invalid' : ''}`}
//                 placeholder="ID"
//                 name="emp_id"
//                 value={employee.emp_id}
//                 onChange={handleChange}
//                 disabled={!!id}
//               />
//               {errors.emp_id && <div className="invalid-feedback">{errors.emp_id}</div>}
//             </div>
//             <div className="col-md-4 mb-3">
//               <label>First Name</label>
//               <input
//                 type="text"
//                 className={`form-control ${errors.emp_firstname ? 'is-invalid' : ''}`}
//                 placeholder="First name"
//                 name="emp_firstname"
//                 value={employee.emp_firstname}
//                 onChange={handleChange}
//               />
//               {errors.emp_firstname && <div className="invalid-feedback">{errors.emp_firstname}</div>}
//             </div>
//             <div className="col-md-4 mb-3">
//               <label>Last Name</label>
//               <input
//                 type="text"
//                 className={`form-control ${errors.emp_lastname ? 'is-invalid' : ''}`}
//                 placeholder="Last name"
//                 name="emp_lastname"
//                 value={employee.emp_lastname}
//                 onChange={handleChange}
//               />
//               {errors.emp_lastname && <div className="invalid-feedback">{errors.emp_lastname}</div>}
//             </div>
//             <div className="col-md-4 mb-3">
//               <label>Email ID</label>
//               <input
//                 type="email"
//                 className={`form-control ${errors.emp_email ? 'is-invalid' : ''}`}
//                 placeholder="Email"
//                 name="emp_email"
//                 value={employee.emp_email}
//                 onChange={handleChange}
//               />
//               {errors.emp_email && <div className="invalid-feedback">{errors.emp_email}</div>}
//             </div>
//           </div>
//           <button type="submit" className="btn btn-success btn-primary">
//             Submit
//           </button>
//         </div>
//       </form>
//     </>
//   );
// };

// export default EmployeeComponent;
