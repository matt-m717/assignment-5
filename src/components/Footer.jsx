import "./Footer.css";

function Footer({ storeName, email, phone, address }) {
    return (
        <footer className="footer">
            <div className="contact">
                <h2>{storeName}</h2>
                <ul>
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
            <div className="links">
                <ul>
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
            </div>
        </footer>
    );
}

export default Footer;
