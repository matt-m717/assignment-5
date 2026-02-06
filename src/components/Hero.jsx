import "./Hero.css";

function Hero({ storeName }) {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>{`Welcome to ${storeName}`}</h1>
                <p>Discover amazing products built with React components</p>
                <button>Shop Now</button>
            </div>
        </section>
    );
}

export default Hero;
