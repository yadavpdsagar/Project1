package net.javaguides.EMS_backend.service.impl;

import lombok.AllArgsConstructor;
import net.javaguides.EMS_backend.dto.EmployeeDto;
import net.javaguides.EMS_backend.entity.Employee;
import net.javaguides.EMS_backend.mapper.EmployeeMapper;
import net.javaguides.EMS_backend.repository.EmployeeRepository;
import net.javaguides.EMS_backend.service.EmployeeService;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class EmployeeServiceImp implements EmployeeService {
 private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee = EmployeeMapper.maptoEmployee(employeeDto);
        Employee saveEmployee= employeeRepository.save(employee);
        return EmployeeMapper.maptoEmployeeDto(saveEmployee);
    }
}



