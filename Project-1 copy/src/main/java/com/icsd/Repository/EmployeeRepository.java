package com.icsd.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.icsd.Model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
