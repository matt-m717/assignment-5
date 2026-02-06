import ProductCard from "../components/ProductCard";

function ProductsPage({ products, addToCart }) {
    return (
        <main className="main-content">
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
