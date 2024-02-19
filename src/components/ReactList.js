import React, { useState, useEffect } from 'react';

const ReactList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
          console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>User Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}><strong>UserId: </strong>{post.userId}<br />
          <strong>id:</strong>{post.id}<br />
            <strong>title: </strong>{post.title}<br />
            <strong>body: </strong>{post.body}<br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReactList;


{/*import React, { useEffect, useState } from 'react';

const ReactList = () => {
  const [users, setUsers] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const data = await res.json();
      setUsers([data]); 
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>userId:</strong>{user.userId}<br />
            <strong>id: </strong>{user.id}<br />
            <strong>Title:</strong>{user.title}<br />
            <strong>completed: </strong>{user.completed ? 'true' : 'false'}<br />
            </li>
        ))}
      </ul>
    </>
  );
};

export default ReactList;
*/}



