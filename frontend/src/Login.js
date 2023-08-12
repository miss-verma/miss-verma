import React, {useState} from 'react'
import validation from './LoginValidation';
// import axios from 'axios'
function Login() {
    const [values, setValues] = useState({
        FirstName: '',
        LastName: '',
        ContactNumber: '',
        email: '',
        SelectYourCity: '',
        SelectYourStream: ''
    })
    // const navigate = usenavigate();
    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: [event.target.value] }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
    //     if(err.name === "" && errors.email === "" && errors.ContactNumber === ""){
    //         axios.post('http://localhost:8081/submit', values)
    //         .then(res => {
    //             navigate('/');
    //         })
    //         .catch(err => console.log(err));
    // }
    // const err = validation(values);
    // setErrors(err);
   
}
    return (
        <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
            <div className='bg-white p-3 rounded w-25 '>
                <h2>Fill this</h2>
                <form action='' onSubmit={handleSubmit}>
                    <div className='name'>
                        <label htmlFor='FirstName'><strong>First Name -</strong> </label>
                        <input type='text' placeholder='Enter your First name' name='First Name '
                            onChange={handleInput} required className='form-control rounded-0' />

                    </div>
                    <div className='lname'>
                        <label htmlFor='LastName'><strong>Last Name - </strong></label>
                        <input type='text' placeholder='Enter your Last name' name='Last Name'
                            onChange={handleInput} required className='form-control rounded-0' />

                    </div>
                    <div className='mail'>
                        <label htmlFor='email'><strong>Email - </strong></label>
                        <input type="email" placeholder='Enter email' name='Email'
                            onChange={handleInput} required className='form-control rounded-0' />
                        {errors.email && <span className='test-danger'>{errors.email}</span>}
                    </div>
                    <div className='cn'>
                        <label htmlFor='ContactNumber'><strong>Contact Number - </strong></label>
                        <input type="number" placeholder='Enter contact number' name='Contact Number'
                            onChange={handleInput} required className='form-control rounded-0' />
                        {errors.ContactNumber && <span className='test-danger'>{errors.ContactNumber}</span>}
                    </div>
                    <div className='select' >
                        <label for='cities'><strong>Select your City -</strong> </label>
                        <select name='cities' id='cities' placeholder='Select your city' required className='form-control rounded-0'>
                            <option value='None'>None</option>
                            <option value='Agra'>Agra</option>
                            <option value='Ahmdabad'>Ahmdabad</option>
                            <option value='Banglore'>Banglore</option>
                            <option value='Bhopal'>Bhopal</option>
                            <option value='Chandigarh'>Chandigarh</option>
                            <option value='Chennai'>Chennai</option>
                            <option value='Delhi'>Delhi</option>
                            <option value='Gurgaon'>Gurgaon</option>
                            <option value='Hyderabad'>Hyderabad</option>
                            <option value='Mumbai'>Mumbai</option>
                        </select>
                    </div>
                    <div className='checkbox' required >
                        <label htmlFor=' Select your stream'> <strong>Select your stream: </strong> </label >
                        <label htmlFor='Stream 1'> Computer Science - </label >
                        <input type="checkbox" id='Stream 1' name='Stream 1' value='Computer Science' />
                        <label htmlFor='Stream 2'> Mechanical - </label>
                        <input type="checkbox" id='Stream 2' name='Stream 2' value='Mechanical' />
                        <label htmlFor='Stream 3'> Electrical - </label>
                        <input type="checkbox" id='Stream 3' name='Stream 3' value='Electrical' />
                    </div>
                    <div className='ds'>
                        <label htmlFor='Description Box'><strong>Description Box- </strong></label>
                        <input type="text" placeholder='Description Box' className='form-control rounded-0 ' />
                    </div>
                    <div className='ccn'>
                        <label htmlFor='Confirm'><strong>Confirm</strong></label>
                        <input type="checkbox" id='Confirm' name='Confirm' value='Confirm' />
                    </div>

                    <button type='submit' className='btn btn-success w-100'><strong>Submit</strong></button>
                </form>
            </div>
        </div>
    )
}
export default Login