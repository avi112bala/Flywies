import React, { useState } from 'react';
import { loginAdmin } from './Routes';

const LoginAdmin = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await loginAdmin(formData);
            console.log('Admin Logged In:', response);
        } catch (error) {
            console.error('Error Logging In:', error);
        }
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='col-md-6 text-center' style={{ height: "1000px", background: "linear-gradient(180deg, #121744 0%, #2D3AAA 100%)" }}>
                        <div className='col-md-12 justify-content-center align-item-center'>
                            <form onSubmit={handleSubmit}>
                                <span className='d-block'> <input type="email" name="email" placeholder="Email" onChange={handleChange} /></span>
                                <span className='d-block mt-2'> <input type="password" name="password" placeholder="Password" onChange={handleChange} /></span>
                                <button type="submit">Login</button>
                            </form>
                        </div>
                    </div>
                    <div className='col-md-6'>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginAdmin;
