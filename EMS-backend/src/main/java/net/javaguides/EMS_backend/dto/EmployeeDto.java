package net.javaguides.EMS_backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class EmployeeDto {
    public Long emp_id;
    public String emp_firstname;
    public String emp_lastname;
    public String emp_email;

}
