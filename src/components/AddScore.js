import React, { useState, useEffect } from 'react';
import { GetUserList, AddScores } from "../apis/api";
import { useNavigate } from 'react-router-dom';

const AddScore = () => {

    const navigate = useNavigate();

    const [userSelectList, setUserSelectList] = useState([]);

    const [user, setUser] = useState({
        userId: '',
        basicVerification: '',
        backgroundCheck: '',
        experince: '',
        postiveBehavior: ''
    });

    useEffect(() => {
        GetUserList().then((response) => {
            setUserSelectList(response.data.users);
        })
        .catch((err) => {});
    }, []);

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await AddScores(user);
            setUser({
                userId: '',
                basicVerification: '',
                backgroundCheck: '',
                experince: '',
                postiveBehavior: ''
            });
            if (response.data.code === 201) {
                navigate('/')
            }
        } catch (err) {}
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card shadow-lg border-0 p-4 rounded-4" style={{ width: "450px" }}>
                <h3 className="text-center fw-bold mb-4">Add Score</h3>
                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label className="form-label fw-semibold">Select User</label>
                        <select
                            className="form-select rounded-3 p-3"
                            name="userId"
                            value={user.userId}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select User</option>
                            {userSelectList.map((u) => (
                                <option key={u._id} value={u._id}>
                                    {u.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-semibold">Basic Verification</label>
                        <input
                            type="number"
                            className="form-control rounded-3 p-3"
                            name="basicVerification"
                            value={user.basicVerification}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-semibold">Background Check</label>
                        <input
                            type="number"
                            className="form-control rounded-3 p-3"
                            name="backgroundCheck"
                            value={user.backgroundCheck}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-semibold">Experience</label>
                        <input
                            type="number"
                            className="form-control rounded-3 p-3"
                            name="experince"
                            value={user.experince}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="form-label fw-semibold">Positive Behavior</label>
                        <input
                            type="number"
                            className="form-control rounded-3 p-3"
                            name="postiveBehavior"
                            value={user.postiveBehavior}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-dark w-100 py-2 rounded-3 fw-semibold">
                        Submit
                    </button>
                </form>
            </div>

        </div>
    )
}

export default AddScore;
