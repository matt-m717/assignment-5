import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartItem from "./components/CartItem";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";

function App() {
    const products = [
        {
            id: 1,
            name: "Wireless Headphones",
            price: 99.99,
            image: "https://placehold.co/600x400",
            description:
                "Premium noise-cancelling headphones with 30-hour battery life"
        },
        {
            id: 2,
            name: "Smart Watch",
            price: 249.99,
            image: "https://placehold.co/600x400",
            description: "Fitness tracker with heart rate monitor and GPS"
        },
        {
            id: 3,
            name: "Bluetooth Speaker",
            price: 79.99,
            image: "https://placehold.co/600x400",
            description: "Portable waterproof speaker with 360-degree sound"
        },
        {
            id: 4,
            name: "Laptop Stand",
            price: 49.99,
            image: "https://placehold.co/600x400",
            description: "Ergonomic aluminum stand for laptops and tablets"
        },
        {
            id: 5,
            name: "Webcam",
            price: 129.99,
            image: "https://placehold.co/600x400",
            description: "4K webcam with auto-focus and noise reduction"
        },
        {
            id: 6,
            name: "Mechanical Keyboard",
            price: 159.99,
            image: "https://placehold.co/600x400",
            description: "RGB backlit keyboard with custom switches"
        }
    ];

    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        try {
            localStorage.setItem("cart", JSON.stringify(cart));
        } catch {
            console.warn("Could not save cart to localStorage:", error);
        }
    }, [cart]);

    const addToCart = product => {
        setCart([...cart, product]);
    };
    const removeFromCart = product => {
        const firstIndex = cart.findIndex(item => product.name == item.name);
        const newCart = [...cart];
        newCart.splice(firstIndex, 1);
        setCart(newCart);
    };

    const storeName = "ComponentCorner";

    return (
        <BrowserRouter>
            <div className="app">
                <Header storeName={storeName} cart={cart} />
                <Routes>
                    <Route
                        path="/"
                        element={<HomePage storeName={storeName} />}
                    />
                    <Route
                        path="/products"
                        element={
                            <ProductsPage
                                products={products}
                                addToCart={addToCart}
                            />
                        }
                    />
                    <Route
                        path="/cart"
                        element={
                            <CartPage
                                cart={cart}
                                removeFromCart={removeFromCart}
                            />
                        }
                    />
                </Routes>
                <Footer
                    storeName={storeName}
                    email="example@example.com"
                    phone="(555) 123-4567"
                    address="123 React Street, Component City, RC 12345"
                />
            </div>
        </BrowserRouter>
    );
}

export default App;
