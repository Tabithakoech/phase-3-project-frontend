// import '../App.css'

// function Card({employee, patchEmployee, handleDelete}){
//     console.log(employee)
//       return(
//         <div className='container'>
//           <div className='employee_card'>
//             <h3>Name: {employee.employee_name}</h3>
//             <p>Age: {employee.age}</p>
//             <p>Gender: {employee.gender}</p>
//             <p>Phone Number: {employee.phone}</p>
//             <p>Department: {employee.department_name}</p>
//             {employee.active? <button onClick={()=> patchEmployee(employee)}>Deactivate Employee</button> : <p>Employee is no longer active</p>}
//             <button onClick={() => handleDelete(employee.id)}>Delete Employee</button>
//           </div>
//         </div>
//         )
//     }
    
//     export default Card;