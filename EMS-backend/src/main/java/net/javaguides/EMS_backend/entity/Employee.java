package net.javaguides.EMS_backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long emp_id;
    @Column(name = "FirstName")
    private String emp_firstname;
    @Column(name = "LastName")
    private String emp_lastname;
    @Column(name = "Email" , nullable = false , unique = true )
    private String emp_email;
}
