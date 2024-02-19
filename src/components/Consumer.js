import React, { useContext } from 'react'
import { DataVal } from './ContextApi';


const Consumer = () => {
    const data = useContext(DataVal);
  return (
    <div>
        <h2>Data fetch from API:</h2>
        <table className="table">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((val) => (
                        <tr key={val.id}>
                            <td>{val.username}</td>
                            <td>{val.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
    </div>
  );
}

export default Consumer