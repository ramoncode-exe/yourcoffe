import "./Benefits.css";
import { motion } from "framer-motion";
import GuaranteeImg from "../assets/guarantee.svg";
import LeafImg from "../assets/leaf.svg";
import FastImg from "../assets/fast.svg";
import CupImg from "../assets/cup.svg";

function Benefits(){
    return(
        <div className="container">
            <motion.div whileHover={{ scale: 1.1 }} initial={{ y: + 500, opacity: 0 }} animate={{ y: 0, opacity: 1 }}  transition={{ duration: 3, ease: "easeOut" }}  className="content">
                <img src={GuaranteeImg} alt="guarantee svg" />
                <h2>Guaranteed Quality</h2>
                <p>Hand-selected beans, freshly roasted, and traceable to origin.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} initial={{ y: + 500, opacity: 0 }} animate={{ y: 0, opacity: 1 }}  transition={{ duration: 3, ease: "easeOut" }}  className="content">
                <img src={LeafImg} alt="leaf svg" />
                <h2>Sustainability</h2>
                <p>We work with small-scale farmers and eco-friendly practices.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} initial={{ y: + 500, opacity: 0 }} animate={{ y: 0, opacity: 1 }}  transition={{ duration: 3, ease: "easeOut" }}  className="content">
                <img src={FastImg} alt="fast svg" />
                <h2>Fast Delivery</h2>
                <p>Get your coffee delivered quickly and safely wherever you are.</p>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1 }} initial={{ y: + 500, opacity: 0 }} animate={{ y: 0, opacity: 1 }}  transition={{ duration: 3, ease: "easeOut" }}  className="content">
                <img src={CupImg} alt="cup svg" />
                <h2>Flavors for Every Taste</h2>
                <p>From smooth to bold profiles, there's a roast for everyone.</p>
            </motion.div>
        </div>
    );
}

export default Benefits