import { useState, useEffect } from 'react';

export default function TentsPage() {

  const [tents, setTents] = useState([]);

  useEffect(() => {
    async function fetchTents() {
      const response = await fetch('/api/products/search/tents');
      const tents = await response.json();
      setTents(tents);
    }
    fetchTents();
  }, []);

  return (
    <div>
      <h1>Tents</h1>
      
      {tents.map(tent => (
        <div key={tent.id}>
          <h2>{tent.name}</h2>
          <p>{tent.description}</p> 
        </div>
      ))}
    </div>
  );
}
