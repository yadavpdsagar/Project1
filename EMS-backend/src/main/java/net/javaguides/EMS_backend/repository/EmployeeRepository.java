package net.javaguides.EMS_backend.repository;

import net.javaguides.EMS_backend.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository  extends JpaRepository<Employee,Long> {
}
