import "./ProductCard.css";

function ProductCard({ product, addToCart }) {
    return (
        <div className="product-card">
            <img src={product.image} className="product-image" />
            <div className="product-info">
                <h2 className="product-name">{product.name}</h2>
                <p className="product-description">{product.description}</p>
                <h2 className="product-price">${product.price}</h2>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
        </div>
    );
}

export default ProductCard;
