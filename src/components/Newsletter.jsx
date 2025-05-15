import "./Newsletter.css"
import { motion } from "framer-motion";

function Newsletter(){
    return(
        <motion.div initial={{ x:-500, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 8, ease: "easeOut" }} className="motion-div">
            <div className="container-news">
                <h2>Get exclusive <span className="btf-color">news and offers</span></h2>
                <p>Subscribe to our newsletter and <span className="btf-color">be the first to know about product launches, brewing tips, and special</span> deals.</p>
                <input className="inputEmail" type="emial" name="Email" placeholder="Your Email..." />
                <motion.button whileHover={{ scale: 1.1 }} className="btnSub">Subscribe</motion.button>
            </div>
        </motion.div>
    );
}

export default Newsletter;