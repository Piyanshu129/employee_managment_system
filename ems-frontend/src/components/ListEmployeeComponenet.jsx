import React,{useEffect,useState} from 'react'
import { deleteemp, listEmployee } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponenet = () => {


  const navigator=useNavigate();

  const[employees,setEmployees]=useState([])


  useEffect(() => {
    getallemp();
  },[])

  function getallemp(){
    listEmployee().then((Response) => { setEmployees(Response.data);}).catch(error => {console.error(error)})


  }
  const dummyData = [
    {
    "id": 1,
    "firstName": "Ramesh",
    "lastName": "Fadatare",
    "email": "ramesh@gmail.com"
  },
  {
    "id": 2,
    "firstName": "Umesh",
    "lastName": "Fadatare",
    "email": "umesh@gmail.com"
  },{
    "id": 3,
    "firstName": "Rajkumar",
    "lastName": "Fadatare",
    "email": "rajkumaragmail. com"}
  ]

  function addNewEmployee(){
    navigator('/add-employee')

  }


  function updateEmployee(id){
    navigator(`/edit-employees/${id}`)
  }


  function removeEmployee(id){
    console.log(id);
    deleteemp(id).then((response) =>{
      getallemp();

    }).catch(error =>{
      console.error(error);
    })
  }
  return (
    <div className='container'>
    <h2 className='text-center'>List of Employees</h2>
   
<table className='table table-striped table-border'>
  <thead>
  <tr>
    <th>Employee Id</th>
    <th>Employee First Name</th> 
    <th>Employee Last Name</th> 
    <th>Employee Email Id</th>
    <th>Actions</th>
  </tr>
  </thead> 
<tbody>
{
  employees.map(employee =>
    <tr key={employee.id}>
      <td>{employee.id}</td>
      <td>{employee.firstName}</td>

      <td>{employee.lastName}</td>

      <td>{employee.email}</td>
      <td><button className='btn btn-info' onClick={() => updateEmployee(employee.id)}> Update</button>
      <button className='btn btn-danger' onClick={() => removeEmployee(employee.id)} style={{marginLeft : '10px'}}> Delete</button></td>
      </tr>
      )
}

</tbody>
      </table>
<center><button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button></center>
      
    </div>
  )
}

export default ListEmployeeComponenet