package net.javaguides.EMS_backend.mapper;

import net.javaguides.EMS_backend.dto.EmployeeDto;
import net.javaguides.EMS_backend.entity.Employee;

public class EmployeeMapper {
    public static EmployeeDto maptoEmployeeDto(Employee employee) {
        return new EmployeeDto(
                 employee.getEmp_id(),
                employee.getEmp_firstname(),
                employee.getEmp_lastname(),
                employee.getEmp_email()

        );
    }

    public static Employee maptoEmployeeEntity(EmployeeDto employeeDto) {
        return new Employee(
                employeeDto.getEmp_id(),
                employeeDto.getEmp_firstname(),
                employeeDto.getEmp_lastname(),
                employeeDto.getEmp_email()


        );
    }
}
