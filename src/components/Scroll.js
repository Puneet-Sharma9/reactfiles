import React, { useState, useEffect } from 'react';

function Scroll() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  const fetchData = async () => {
    setLoading(true);
    // Simulating API call
    const response = await fetch(`https://fakestoreapi.com/users?page=${page}`);
    const data = await response.json();
    setItems(prevItems => [...prevItems, ...data]);
    setLoading(false);
    setPage(prevPage => prevPage + 1);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    ) {
      return;
    }
    fetchData();
  };

  console.log(items, "asdlkjkash")

  return (
    <div>
      <div style={{ minHeight: '100px' }}>
        {/* Placeholder for existing content */}
        {items.map(item => (
          <div key={item.id}>
            {item.username}
            </div>
        ))}
      </div>
      {loading && <div>Loading...</div>}
    </div>
  );
}

export default Scroll;
