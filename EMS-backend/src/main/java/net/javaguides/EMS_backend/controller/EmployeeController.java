package net.javaguides.EMS_backend.controller;

import net.javaguides.EMS_backend.dto.EmployeeDto;
import net.javaguides.EMS_backend.entity.Employee;
import net.javaguides.EMS_backend.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employees")
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;
    // Build Add employee REST API
    @PostMapping
    public ResponseEntity<EmployeeDto> createEmployee( @RequestBody  EmployeeDto employeeDto) {
        EmployeeDto saveEmployee = employeeService.createEmployee(employeeDto);
        return new ResponseEntity<>(saveEmployee, HttpStatus.CREATED);

    }
    // Build GET employee REST API
    @GetMapping("{id}")
   public ResponseEntity<EmployeeDto> getEmployeeById(@PathVariable("id") long emp_id) {
        EmployeeDto employeeDto = employeeService.getEmployeeById(emp_id);
        return  ResponseEntity.ok(employeeDto);
   }
   @GetMapping
    public ResponseEntity<List<EmployeeDto>> getAllEmployees() {
       List<EmployeeDto> employees= employeeService.getAllEmployees();
       return ResponseEntity.ok(employees);
   }




}
