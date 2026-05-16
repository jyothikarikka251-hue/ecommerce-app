import { useEffect, useState } from "react";
import axios from "axios";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(res => setProducts(res.data));
  }, []);

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    alert("Added to cart");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>🛍️ Products</h2>

      {products.map(p => (
        <div key={p._id} style={{
          border: "1px solid #ddd",
          padding: 10,
          margin: 10
        }}>
          <h3>{p.name}</h3>
          <p>₹{p.price}</p>

          <button onClick={() => addToCart(p)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}