import { useState } from "react";
import { motion } from "framer-motion";
import Logo from "../assets/logo.png";
import Menu from "../assets/menu-img.png";
import "./Header.css"

function Header() {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
 
  return (
    <header className="header">
        <img id="logo" src={Logo} alt="logo"/>
        <div>
          <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
            <a href="#home"><motion.li whileHover={{ scale: 1.1 }}>Home</motion.li></a>
            <a href="#benefits"><motion.li whileHover={{ scale: 1.1 }}>Benefits</motion.li></a>
            <a href="#products"><motion.li whileHover={{ scale: 1.1 }}>Products</motion.li></a>
            <a href="#history"><motion.li whileHover={{ scale: 1.1 }}>Our Story</motion.li></a>
            <a href="#newsletter"><motion.li whileHover={{ scale: 1.1 }}>Newsletter</motion.li></a>
            <motion.button className="btnContact" whileHover={{ scale: 1.1 }}>Contact Us</motion.button>
          </ul>
        </div>
        <img id="menu" src={Menu} alt="menu image" onClick={toggleMenu}/>
    </header>
  );
}

export default Header;
