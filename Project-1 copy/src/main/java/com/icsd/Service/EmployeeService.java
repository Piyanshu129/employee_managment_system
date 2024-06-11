package com.icsd.Service;

import java.util.List;

import com.icsd.dto.EmployeeDto;

public interface EmployeeService {

	EmployeeDto createemp(EmployeeDto employeeDto);
	EmployeeDto getempbyid(long id);
	EmployeeDto getEmployeeById(Long employeeId);
	List<EmployeeDto> getallemp();
	EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee);
	public void  delEmployeeDto(long empid);

}
