import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Api2 = () => {
    const [userData, setUserData] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        axios.get('https://fakestoreapi.com/users')
            .then((response) => {
                setUserData(response.data);
            })
            .catch((error) => {
                setError('An error occurred while fetching data.');
            });
    }, []);

    return (
        <div className="container mt-4">
            <h3 className="mb-3">Axios test</h3>
            {error && <p className="alert alert-danger">{error}</p>}
            <table className="table">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((val) => (
                        <tr key={val.id}>
                            <td>{val.username}</td>
                            <td>{val.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Api2;
