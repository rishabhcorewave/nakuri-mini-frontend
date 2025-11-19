import React, { useState } from 'react';
import { RegisterUser } from "../apis/api";
import { useNavigate } from 'react-router-dom'; 

const AddUser = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await RegisterUser(user);
            setUser({
                name: '',
                email: '',
                password: ''
            });
            if(response.data.code === 201){
                navigate('/')
            }
        } catch (err) {}
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card shadow-lg border-0 p-4 rounded-4" style={{ width: "420px" }}>
                <h3 className="text-center fw-bold mb-4">Create User</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label fw-semibold">Name</label>
                        <input 
                            type="text"
                            className="form-control rounded-3 p-3"
                            name="name"
                            value={user.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-semibold">Email</label>
                        <input 
                            type="email" 
                            className="form-control rounded-3 p-3"
                            name="email"
                            value={user.email} 
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="form-label fw-semibold">Password</label>
                        <input 
                            type="password" 
                            className="form-control rounded-3 p-3"
                            name="password"
                            value={user.password} 
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
                    <button 
                        type="submit" 
                        className="btn btn-dark w-100 py-2 rounded-3 fw-semibold"
                    >
                        Submit
                    </button>
                </form>
            </div>

        </div>
    )
}

export default AddUser;
