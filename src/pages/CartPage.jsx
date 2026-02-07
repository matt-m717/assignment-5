import CartItem from "../components/CartItem";
import "./CartPage.css";

function CartPage({ cart, removeFromCart }) {
    const total = () =>
        cart.reduce((total, item) => total + item.price, 0).toFixed(2);
    return (
        <main className="main-content" id="cart-page">
            <h2>Shopping Cart</h2>
            {cart.length > 0 ? (
                <div className="items">
                    {cart.map(item => (
                        <CartItem
                            item={item}
                            removeFromCart={removeFromCart}
                        ></CartItem>
                    ))}
                    <p className="total-price">Total: ${total()}</p>
                </div>
            ) : (
                <div>Your cart is empty</div>
            )}
        </main>
    );
}

export default CartPage;
