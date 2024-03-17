import { Link } from 'react-router-dom';

export default function IndexPage() {
  return (
    <div>
      <h1>Our Products</h1>

      <Link to="/tents">Tents</Link>
      <Link to="/backpacks">Backpacks</Link>
      <Link to="/sleeping-bags">Sleeping Bags</Link>  
      <Link to="/hammocks">Hammocks</Link>
    </div>
  );
}