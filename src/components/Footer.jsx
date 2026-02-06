import "./Footer.css";

function Footer({ storeName, email, phone, address }) {
    return (
        <footer className="footer">
            <div>
                <h2>{storeName}</h2>
                <ul className="contact">
                    <li>
                        <p>{`Email: ${email}`}</p>
                    </li>
                    <li>
                        <p>{`Phone: ${phone}`}</p>
                    </li>
                    <li>
                        <p>{`Address: ${address}`}</p>
                    </li>
                </ul>
            </div>
            <ul className="links">
                <li>
                    <a>About</a>
                </li>
                <li>
                    <a href={`mailto:${email}`}>Contact</a>
                </li>
                <li>
                    <a>Privacy Policy</a>
                </li>
                <li>
                    <a>Terms of Service</a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
