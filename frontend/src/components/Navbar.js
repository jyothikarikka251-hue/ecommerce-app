import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      padding: 15,
      background: "#111",
      color: "white"
    }}>
      <h3>🛍️ ShopEasy</h3>

      <div style={{ display: "flex", gap: 15 }}>
        <Link style={{ color: "white" }} to="/">Products</Link>
        <Link style={{ color: "white" }} to="/cart">Cart</Link>
        <Link style={{ color: "white" }} to="/login">Login</Link>
        <Link style={{ color: "white" }} to="/register">Register</Link>
      </div>
    </div>
  );
}