import "./Footer.css"
import Logo from "../assets/logo.png";

function Footer(){
    return(
        <div className="footer">
            <div className="container-footer">
                <div className="container-logo">
                    <img id="logo" src={Logo} alt="logo" />
                    <p>At YourCoffe, we believe every cup tells a story. We carefully select specialty beans from unique origins to deliver authentic, sustainable, and flavorful experiences.</p>
                </div>
                <div className="navegation-links">
                    <ul className="footer-links">
                        <h4>Navegation</h4>
                        <li>Home</li>
                        <li>Benefits</li>
                        <li>Product</li>
                        <li>Our Story</li>
                        <li>Newsletter</li>
                    </ul>
                    <div className="content-data">
                        <h4>Contact</h4>
                        <p>contact@yourcoffe.com</p>
                        <p>+351 912 754 876</p>
                        <p>Portugal, Braga, YourCoffe.</p>  
                    </div>
                </div>  
            </div>
            <div className="all-right">
                <p>YourCoffe © 2025. Passion in every bean. Terms of Use. Privacy Policy</p>
            </div>
        </div>
    );
}

export default Footer;