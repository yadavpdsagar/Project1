package net.javaguides.EMS_backend.service.impl;

import lombok.AllArgsConstructor;
import net.javaguides.EMS_backend.dto.EmployeeDto;
import net.javaguides.EMS_backend.entity.Employee;
import net.javaguides.EMS_backend.exception.ResourceNotFoundException;
import net.javaguides.EMS_backend.mapper.EmployeeMapper;
import net.javaguides.EMS_backend.repository.EmployeeRepository;
import net.javaguides.EMS_backend.service.EmployeeService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

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

    @Override
    public EmployeeDto getEmployeeById(long id) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(()->
                        new ResourceNotFoundException("Employee is not found " + id));
        return EmployeeMapper.maptoEmployeeDto(employee);
    }

    @Override
    public List<EmployeeDto> getAllEmployees() {
        List<Employee> employees = employeeRepository.findAll();

        return employees.stream().map((employee)->
                EmployeeMapper.maptoEmployeeDto(employee))
                .collect(Collectors.toList()) ;
    }




}



