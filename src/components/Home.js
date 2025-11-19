import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GetUserList } from '../apis/api';

const Home = () => {

    const [userList, setUserList] = useState([]);

    useEffect(() => {
        GetUserList().then((response) => {
            setUserList(response.data.users);
        })
        .catch((err) => console.error("Error fetching data:", err));
    }, []);

    return (
        <div className="container py-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="fw-bold text-dark">User List</h2>
                <div>
                    <Link to="/add-user" className="btn btn-dark px-4 me-2">Register</Link>
                    <Link to="/add-score" className="btn btn-outline-dark px-4">Add Score</Link>
                </div>
            </div>

            <div className="card shadow-lg border-0 rounded-4">
                <div className="card-body p-4">
                    <table className="table table-hover align-middle">
                        <thead className="table-dark">
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Password</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userList.map((user, index) => (
                                <tr key={user._id} className="table-row-custom">
                                    <td className="fw-semibold">{index + 1}</td>
                                    <td className="fw-semibold">{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.password}</td>
                                    <td>
                                        <Link 
                                            to={`/view-score/${user._id}`} 
                                            className="btn btn-sm btn-dark rounded-pill px-3"
                                        >
                                            View Score
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}

export default Home;
