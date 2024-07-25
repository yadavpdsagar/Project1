package net.javaguides.EMS_backend.service;

import net.javaguides.EMS_backend.dto.EmployeeDto;

import java.util.List;

public interface EmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto);
    EmployeeDto getEmployeeById(long emp_id);
    List<EmployeeDto> getAllEmployees();

EmployeeDto updateEmployee(Long emp_id , EmployeeDto employeeDto);
void deleteEmployee(Long emp_id);



}
