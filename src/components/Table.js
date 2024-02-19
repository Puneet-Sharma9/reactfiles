import React, { useState } from 'react';

const Table = () => {
    const [userData, setUserData] = useState({
        firstname: '',
        lastname: '',
        midname: ''
    });
    const [tableData, setTableData] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { firstname, lastname, midname } = userData;
        if (firstname && lastname && midname) {
            setTableData([...tableData, { firstname, lastname, midname }]);
            setUserData({ firstname: '', lastname: '', midname: '' });
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    FirstName:
                    <input type="text" name="firstname" value={userData.firstname} onChange={handleChange} />
                </label>
                <label>
                    LastName:
                    <input type="text" name="lastname" value={userData.lastname} onChange={handleChange} />
                </label>
                <label>
                    MidName:
                    <input type="text" name="midname" value={userData.midname} onChange={handleChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>MidName</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((val, ind) => (
                        <tr key={ind}>
                            <td>{val.firstname}</td>
                            <td>{val.lastname}</td>
                            <td>{val.midname}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
