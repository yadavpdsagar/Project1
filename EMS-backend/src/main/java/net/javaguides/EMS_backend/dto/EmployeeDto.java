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
/*
 "emp_id": "1"
"emp_firstname": "sagar"
 "emp_lastname" : "yadav"
 "emp_email" : "sagar4260@gamil.com"
*/

