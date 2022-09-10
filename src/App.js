import './App.css';
import { useState, useEffect } from 'react'
import Card from './components/Card';
import CreateForm from './components/CreateForm';

function App() {
  const [employees, setEmployees] = useState([])
  const [departments, setDepartments] = useState([])

  useEffect(()=> {
  //Gets departments and employees
    fetch('http://localhost:9292/employees')
    .then(res => res.json())
    .then(setEmployees)
    
    fetch('http://localhost:9292/departments')
    .then(res => res.json())
    .then(setDepartments)
  },[])

  //Creates a employee
  const postEmployee = (employee) => {
    fetch('http://localhost:9292/employees',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body: JSON.stringify(employee)
    })
    .then(res => res.json())
    .then(newEmployee => {
      setEmployees([newEmployee,...employees])
    })
  }
//patches employee
  const patchEmployee = (employee) => {
    fetch(`http://localhost:9292/employees/${employee.id}`,{
      method:'PATCH',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({...employee, active: false})
    })
    .then(res => res.json())
    .then(data => {
      setEmployees(employees.map(st => {
        if(st.id === data.id){
          return data
        } else {
          return st
        }
      }))
    })
  } 
//Deletes patient
  const handleDelete = (id) => {
    fetch(`http://localhost:9292/employees/${id}`,{
      method:'DELETE',
      headers:{'Content-Type':'application/json'}
    })
    .then(res => res.json())
    .then(() => {
      setEmployees(employees.filter(st => st.id !== id))
    })
  }
  return (
    <div className="App">
      <div>
      <CreateForm postEmployee={postEmployee} departments={departments}/>
      {employees.map(st => <Card employee={st} patchEmployee={patchEmployee} handleDelete={handleDelete} key={`${st.id}${st.name}`}/>)}
      </div> 
    </div> 
  );
}
export default App;
