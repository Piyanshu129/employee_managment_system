import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../services/EmployeeService'
import { useNavigate ,useParams} from 'react-router-dom'

const EmployeeComponent = () => {
  const [firstName,setfirstname]=useState('')
  const [lastName,setlastname]=useState('')
  const [email,setemail]=useState('')
   const {id}=useParams();


   const [errors,seterrors] = useState({
    firstName : ' ',
    lastName : ' ',
    email : ' '
  })

const navigator=useNavigate();

useEffect(() => {
  if(id){
    
    getEmployee(id).then((response) =>{
      setfirstname(response.data.firstName);
      setlastname(response.data.lastName);
      setemail(response.data.email);
    }).catch(error => {console.log(error);
    })
  }
},[id])


  
  

  const handleFirstName = (e) => setfirstname(e.target.value);



  const handleLastName = (e) => setlastname(e.target.value);


  const handleemail = (e) =>setemail(e.target.value);



  function saveorUpdateEmployee(e){
    e.preventDefault();
    if(validateForm){

    const employee = {firstName, lastName, email}
    console.log(employee)


    if(id){
      updateEmployee(id,employee).then((response) =>{
        console.log(response.data);
        navigator('/employees')
      }).catch(error =>{
        console.error(error);
      })
    }else{
      createEmployee(employee).then((response)=>{
        console.log(response.data);
        navigator('/employees')
          }).catch(error => {
            console.error(error);
          })
        
    }

  }

    
  }

  function pagetitle(){
    if(id){
      return <h2 className=' text-center'>Update Employee</h2>
    }else{
      return <h2 className=' text-center'>Add Employee</h2>
    }
  }


  function validateForm(){
    let valid = true;
    const errorsCopy = {... errors}
    if(firstName.trim()){

    errorsCopy.firstName = '';
    } else {
    errorsCopy.firstName = 'First name is required';
    valid = false;
    }
    if(lastName.trim()){
    errorsCopy.lastName = '';
    } else {
    errorsCopy.lastName = 'Last name is required';
    valid = false;
    }
    
    if (email. trim()){
    errorsCopy.email = '';
    } else{
    
    
    
    errorsCopy.email = 'Email is required';
    }

    seterrors(errorsCopy);
    return valid;
  }

  return (
    <div className=' container'>
      <br></br>
        <div className=' row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
               {
                pagetitle()
               }
    <div className= 'card-body'>
      <form>
        <div className='form-group mb-2'>
          <label className='form-label'>First Name:</label>
          <input
            type='text'
              placeholder='Enter Employee First Name'
               name='firstName'
                value={firstName}
                className={`form-control ${errors.firstName ? 'is-invalid': ' '}`}
               onChange={handleFirstName}>
            </input>
            {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
        </div>


        <div className='form-group mb-2'>
          <label className='form-label'>Last Name:</label>
          <input
            type='text'
              placeholder='Enter Employee Last Name'
               name='lastName'
                value={lastName}
                className={`form-control ${errors.lastName ? 'is-invalid': ' '}`}
             onChange={handleLastName}>
            </input>
            {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
        </div>


        <div className='form-group mb-2'>
          <label className='form-label'>E-mail:</label>
          <input
            type='text'
              placeholder='Enter Employee email'
               name='email'
                value={email}
                className={`form-control ${errors.email ? 'is-invalid': ' '}`}
             onChange={handleemail}>
            </input>
            {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
        </div>

        <button className='btn btn-success' onClick={saveorUpdateEmployee} >Submit</button>


      </form>
    </div>
    </div>
    </div>
    </div>
  )
}

export default EmployeeComponent