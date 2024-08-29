import React, { useState } from 'react'


const RegistrationForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '',password: '' });
    const [errors, setErrors] = useState({}); // To track validation errors
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    
    const validateForm = () => {
        let formErrors = {};

        if (!formData.name) {
            formErrors.name = 'Username is required';
        }

        if (!formData.email) {
            formErrors.email = 'Email is required';
        }

        if (!formData.password) {
            formErrors.password = 'Password is required';
        }

        return formErrors;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);const formErrors = validateForm();

        if (Object.keys(formErrors).length === 0) {
            // If no errors, submit the form (e.g., log the formData)
            console.log(formData);
        } else {
            // If there are errors, set them to be displayed
            setErrors(formErrors);
        }
    };

 
    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}
        <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
         <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}
        <button type="submit">Submit</button>
    </form>
  )
}

export default RegistrationForm
