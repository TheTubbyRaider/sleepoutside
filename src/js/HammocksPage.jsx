import { useState, useEffect } from 'react';

export default function HammocksPage() {

  const [hammocks, setHammocks] = useState([]);

  useEffect(() => {
    async function fetchHammocks() {
      const response = await fetch('/api/products/search/hammocks');
      const hammocks = await response.json();
      setHammocks(hammocks);
    }
    fetchHammocks();
  }, []);

  return (
    <div>
      <h1>Hammocks</h1>
      
      {hammocks.map(hammock => (
        <div key={hammock.id}>
          <h2>{hammock.name}</h2>
          <p>{hammock.description}</p>
        </div>
      ))}
    </div>
  );

}
