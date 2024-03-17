import { useState, useEffect } from 'react';

export default function SleepingBagsPage() {

  const [sleepingBags, setSleepingBags] = useState([]);

  useEffect(() => {
    async function fetchSleepingBags() {
      const response = await fetch('/api/products/search/sleeping-bags');
      const sleepingBags = await response.json();
      setSleepingBags(sleepingBags);
    }
    fetchSleepingBags();
  }, []);

  return (
    <div>
      <h1>Sleeping Bags</h1>
      
      {sleepingBags.map(bag => (
        <div key={bag.id}>
          <h2>{bag.name}</h2>
          <p>{bag.description}</p>
        </div>
      ))}
    </div>
  );

}
