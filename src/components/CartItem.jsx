import "./CartItem.css";

function CartItem({ item, removeFromCart }) {
    return (
        <div className="cart-item">
            <div className="item-info">
                <p>{item.name}</p>
                <p className="price">${item.price}</p>
            </div>
            <button onClick={() => removeFromCart(item)}>Remove</button>
        </div>
    );
}

export default CartItem;
