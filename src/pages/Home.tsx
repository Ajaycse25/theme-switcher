import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Welcome to Theme Switcher App</h2>
      <p className="mb-4">This app lets you switch between multiple themes!</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4 transition">
        Click Me
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.slice(0, 6).map((product: any) => (
          <div key={product.id} className="border rounded shadow p-4">
            <h3 className="font-bold">{product.title}</h3>
            <p>Rs{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
