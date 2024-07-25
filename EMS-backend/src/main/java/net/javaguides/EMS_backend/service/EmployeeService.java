package net.javaguides.EMS_backend.service;

import net.javaguides.EMS_backend.dto.EmployeeDto;

public interface EmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto);
    EmployeeDto getEmployeeById(long emp_id);
//    EmployeeDto updateEmployee(EmployeeDto employeeDto);
//    EmployeeDto deleteEmployee(EmployeeDto employeeDto);
//
}
