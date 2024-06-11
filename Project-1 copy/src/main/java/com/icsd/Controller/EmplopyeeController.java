package com.icsd.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.icsd.Service.EmployeeService;
import com.icsd.dto.EmployeeDto;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/emp")
public class EmplopyeeController {

	@Autowired
	private EmployeeService es;
	
	@PostMapping
	public ResponseEntity<EmployeeDto> createEmployee(@RequestBody EmployeeDto employeeDto){
	EmployeeDto savedEmployee = es.createemp(employeeDto);
	return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
	}
	
	
	
	@GetMapping("{id}")
	public ResponseEntity<EmployeeDto> getEmployeeById(@PathVariable("id") Long employeeId){
		
	EmployeeDto employeeDto = es.getEmployeeById(employeeId);
	return ResponseEntity.ok(employeeDto);
	
	}
	
	@GetMapping("/allemp")
	public ResponseEntity<List<EmployeeDto>> getAllEmp(){
		
	List<EmployeeDto> employeeDto = es.getallemp();
	return ResponseEntity.ok(employeeDto);
	
	}
	
	@PutMapping("{id}")
	public ResponseEntity<EmployeeDto> updateEmployee(@PathVariable("id") long employeeId,@RequestBody EmployeeDto updatedEmployee){
	EmployeeDto employeeDto = es.updateEmployee(employeeId, updatedEmployee);
	return ResponseEntity.ok(employeeDto);
	}
	
	@DeleteMapping("{id}")
	public ResponseEntity<String> deleteEmployee(@PathVariable("id") Long employeeId){
	es.delEmployeeDto(employeeId);
	return ResponseEntity.ok("Employee deleted successfully!.");
	}
	
	
}
