import Hero from "../components/Hero";
import "./HomePage.css";

function HomePage({ storeName }) {
    return (
        <main className="main-content">
            <Hero storeName={storeName} />
            <div className="why-shop">
                <h2>Why Shop With Us?</h2>
                <div className="reasons">
                    <ul>
                        <li>
                            <h3>Quality Products</h3>
                            <p>Carefully curated selection of the best items</p>
                        </li>
                        <li>
                            <h3>Fast Shipping</h3>
                            <p>Get your orders delviered quickly and safely</p>
                        </li>
                        <li>
                            <h3>Great Support</h3>
                            <p>Our team is here to help with any questions</p>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
}

export default HomePage;
