import {useState} from 'react'
import '../App.css'

function CreateForm({postEmployee, departments}){
    const [formData, setFormData] = useState({
        name:'',
        age: '',
        gender: '',
        phone: '',
        department_id:'',
        active: true
    })
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        postEmployee(formData)
    } 
    return(
        <div className='employee_form'>
            <h1 className='title'>Employee Database</h1>
            <form onSubmit={handleSubmit}>
                <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange}/>
                </label>
                <label>
                Age:
                <input type="number" name="age" value={formData.age} onChange={handleChange}/>
                </label>
                <label>
                Gender:
                <input type="text" name="gender" value={formData.gender} onChange={handleChange}/>
                </label>
                <label>
                Phone number:
                <input type="text" name="phone" value={formData.phone} onChange={handleChange}/>
                </label>
                <label>
                Department:
                <input type="text" name="department_id" value={formData.department_id} onChange={handleChange}/>

                {/* <select name="department_id" onChange={handleChange}>
                    <option>Select A Department</option>
                    {departments.map(s => <option value={s.id}>{s.department_name}</option>)}
                </select> */}
                </label>
                <input className='submit_btn' type="submit" value="Submit" />
            </form>
        </div>
        
    )
}

export default CreateForm