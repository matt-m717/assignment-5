import ProductCard from "../components/ProductCard";
import "./ProductsPage.css";

function ProductsPage({ products, addToCart }) {
    return (
        <main className="main-content" id="products-page">
            <h2>Featured Products</h2>
            <div className="products">
                {products.map(product => (
                    <ProductCard product={product} addToCart={addToCart} />
                ))}
            </div>
        </main>
    );
}

export default ProductsPage;
