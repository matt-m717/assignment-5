import CartItem from "../components/CartItem";

function CartPage({ cart, removeFromCart }) {
    const total = () => cart.reduce((total, item) => total + item.price, 0);
    return (
        <main className="main-content">
            <h2>Shopping Cart</h2>
            {cart.length > 0 ? (
                <div>
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
