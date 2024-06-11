package com.icsd.Mapper;

import com.icsd.Model.Employee;
import com.icsd.dto.EmployeeDto;

public class EmployeeMapper {
	
	public static EmployeeDto mapToEmployeeDto(Employee employee){
		return new EmployeeDto(
		employee.getId(), 
		employee.getFirstName(),
		employee.getLastName(),
		employee.getEmail()
		);
		}
		public static Employee mapToEmployee(EmployeeDto employeeDto){
		return new Employee (
		employeeDto.getId(),
		employeeDto.getFirstName(),
		employeeDto. getLastName(),
		employeeDto.getEmail()
		);
		}

}
