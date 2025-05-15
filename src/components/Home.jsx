import "./Home.css";
import { motion } from "framer-motion";
import CoffeImg from "../assets/home-img.png"

function Home() {
  return (
    <main>
      <div className="dad-section">
        <div className="child-section">
          <h1>Coffee that awakens <span className="btf-color">your best days</span></h1>
          <p>At YourCoffe, every cup tells a story. 100% specialty coffee, straight from the farm to your routine.</p>
          <div className="btn">
            <motion.button className="btnHome" whileHover={{ scale: 1.1 }}>Discover our coffees</motion.button>
            <motion.button className="btnNews" whileHover={{ scale: 1.1 }}>Subscribe to newsletter</motion.button>
          </div>
        </div>
        <div>
          <motion.img initial={{ x: +500, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.5, ease: "easeOut" }} id="coffe-img" src={CoffeImg} alt="A cup of coffe" />
        </div>
      </div>
    </main>
  );
}

export default Home;
