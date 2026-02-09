import React from "react";
import "../assets/footer.scss";

class Footer extends React.Component {
    render() {
        // Dades d'exemple per visualitzar el bucle
        const xarxes = ["Twitter", "Instagram", "Twitch"];

        return (
            <footer className="site-footer">
                <div className="footer-container">
                    <div className="footer-links">
                        {xarxes.map((item) => (
                            <span key={item} className={`link-item link-${item.toLowerCase()}`}>
                                {item}
                            </span>
                        ))}
                    </div>
                    <p className="footer-copy">© Gaming 2025</p>
                </div>
            </footer>    
        );
    }
}

export default Footer;