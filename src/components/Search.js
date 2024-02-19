import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Search = () => {
    const [user, setUser] = useState([]);
    const [error, setError] = useState('');
    const [search,setSearch] = useState('');
    const [filter,setFilter] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/users')
            .then((response) => {
                setUser(response.data); 
            })
            .catch((error) => {
                setError('An error occurred while fetching data.');
            });
    }, []);

    const handleSearch = () => {
      const filteredData = user.filter(user =>
          user.username.toLowerCase().includes(search.toLowerCase()) ||
          user.email.toLowerCase().includes(search.toLowerCase())
      );
      setFilter(filteredData);
    };

    const handleChange = (e) => {
        const searching = setSearch(e.target.value);
        handleSearch(searching)
      }
    
    const reset = () => {
        setSearch('');
        setFilter([]);
    }
    return (
        <>
            <div className='container mt-3'>
                <h3> To search data in textbox</h3>
                {error && <p className='alert alert-danger'>{error}</p>}

                <div>
                    <input type='text' placeholder='search here' value={search} onChange={handleChange} />
                    {/* <button className='btn btn-success' onChange={handleSearch}>search</button> */}
                    <button className='btn btn-success' onClick={reset}>reset</button>

                </div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filter.map((val) => (
                            <tr key={val.id}>
                                <td>{val.username}</td>
                                <td>{val.email}</td>
                                <td>{val.password}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Search;
