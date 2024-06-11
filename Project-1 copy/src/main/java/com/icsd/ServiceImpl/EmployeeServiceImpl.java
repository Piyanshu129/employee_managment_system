package com.icsd.ServiceImpl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.icsd.Exception.ResourceNotFoundException;
import com.icsd.Mapper.EmployeeMapper;
import com.icsd.Model.Employee;
import com.icsd.Repository.EmployeeRepository;
import com.icsd.Service.*;
import com.icsd.dto.EmployeeDto;

import lombok.AllArgsConstructor;


@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {
	
	@Autowired
	private EmployeeRepository er;

	@Override
	public EmployeeDto createemp(EmployeeDto employeeDto) {
		
		Employee emp=EmployeeMapper.mapToEmployee(employeeDto);
		Employee savedemp=er.save(emp);
		return EmployeeMapper.mapToEmployeeDto(savedemp);
	}

	@Override
	public EmployeeDto getEmployeeById(Long employeeId) {
		Employee employee = er.findById(employeeId).orElseThrow(() -> new ResourceNotFoundException("Employee is not exists with given id : " + employeeId));
	return EmployeeMapper.mapToEmployeeDto(employee);
	}

	@Override
	public EmployeeDto getempbyid(long id) {
		// TODO Auto-generated method stub
		return null;
	}

//	@Override
//	public List<EmployeeDto> getallemp() {
//		
//
//		List<Employee> emp=er.findAll();
//		return emp.stream().map((employee) -> EmployeeMapper.mapToEmployeeDto(emp)).collect(Collectors.toList());
//	}
	@Override
	public List<EmployeeDto> getallemp() {
	List<Employee> employees = er.findAll();
	return employees.stream().map((employee) ->EmployeeMapper.mapToEmployeeDto (employee)).collect(Collectors.toList());
	
	}

	@Override
	public EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee) {
		Employee emp=er.findById(employeeId).orElseThrow(() -> new ResourceNotFoundException("Emp not found " + employeeId));
		emp.setFirstName(updatedEmployee.getFirstName());
		emp.setLastName(updatedEmployee.getLastName());
		emp.setEmail(updatedEmployee.getEmail());
		
		Employee updatedobj=er.save(emp);
		return EmployeeMapper.mapToEmployeeDto(updatedobj);
	}

	@Override
	public void delEmployeeDto(long empid) {
		Employee employee = er.findById(empid).orElseThrow(() -> new ResourceNotFoundException("Employee is not exists with given id: " + empid));
		er.deleteById(empid);
		
	}
}

