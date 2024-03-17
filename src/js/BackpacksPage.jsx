import { useState, useEffect } from 'react';

export default function BackpacksPage() {

  const [backpacks, setBackpacks] = useState([]);

  useEffect(() => {
    async function fetchBackpacks() {
      const response = await fetch('/api/products/search/backpacks');
      const backpacks = await response.json();
      setBackpacks(backpacks);
    }
    fetchBackpacks();
  }, []);

  return (
    <div>
      <h1>Backpacks</h1>
      
      {backpacks.map(backpack => (
        <div key={backpack.id}>
          <h2>{backpack.name}</h2>
          <p>{backpack.description}</p>
        </div>
      ))}
    </div>
  );

}
