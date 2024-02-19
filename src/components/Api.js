import React, { useState, useEffect } from "react";
import axios from "axios";

function Api() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts/1/comments")
            .then(response => {
                // setLoading(false);
                setPosts(response.data);
                setError('');
            })
            .catch(error => {
                // setLoading(false);
                setError("An error occurred while fetching data.");
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);
    console.log(posts);
    return (
        <div>
            {loading ? 'Loading data...' : (
            <ul>
                {posts.map((data) => (
                    <li key = {data.id}>
                        {data.id}: {data.name}
                    </li>
                ))}
            </ul>
            )}
            {error && <p>{error}</p>}
        </div>
    );
}

export default Api;
