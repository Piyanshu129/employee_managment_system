import { useState } from 'react'
import './App.css'
import ListEmployeeComponenet from './components/ListEmployeeComponenet'
import Headercomponent from './components/Headercomponent'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import EmployeeComponent from './components/EmployeeComponent'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Headercomponent />
     <Routes>
      <Route path='/' element = {<ListEmployeeComponenet></ListEmployeeComponenet>}></Route>
      <Route path='/employees' element = {<ListEmployeeComponenet></ListEmployeeComponenet>}></Route>
      <Route path='/add-employee' element={<EmployeeComponent></EmployeeComponent>}></Route> 
      <Route path='/edit-employees/:id' element={<EmployeeComponent/>}></Route>
      </Routes>
   
     </BrowserRouter>
    </>
  )
}

export default App
