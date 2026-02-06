import { Link } from "react-router-dom";
import "./Header.css";

function Header({ storeName, cart }) {
    return (
        <nav className="navbar">
            <h2>{storeName}</h2>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/cart">Cart</Link>
                </li>
            </ul>
            <div className="cart-container">
                <span className="cart-icon">🛒</span>
                <span className="cart-badge">{cart.length}</span>
            </div>
        </nav>
    );
}

export default Header;
