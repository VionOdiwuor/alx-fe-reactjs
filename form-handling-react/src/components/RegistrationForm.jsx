import React, { useState } from 'react'
import { useState } from react;

const RegistrationForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({}); // To track validation errors
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'username') {
            setUsername(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };

    
    const validateForm = () => {
        let formErrors = {};

        if (!username) {
            formErrors.name = 'Username is required';
        }

        if (!email) {
            formErrors.email = 'Email is required';
        }

        if (!password) {
            formErrors.password = 'Password is required';
        }

        return formErrors;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();

        if (Object.keys(formErrors).length === 0) {
            // If no errors, submit the form (e.g., log the formData)
            console.log({ username, email, password });
        } else {
            // If there are errors, set them to be displayed
            setErrors(formErrors);
        }
    };

 
    return (
        <form onSubmit={handleSubmit}>
        <div>
        <label>Username</label>
        <input
            type="text"
            name="name"
            value={username}
            onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
        <label>email</label>
        <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
        <label>password</label>
         <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}
        </div>
        <button type="submit">Submit</button>
    </form>
  )
}

export default RegistrationForm
