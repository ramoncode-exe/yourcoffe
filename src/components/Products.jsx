import "./Products.css";
import { motion } from "framer-motion";
import Mountain from "../assets/mountain.png";
import Organic from "../assets/organic.png";
import Bold from "../assets/bold.png"
import Special from "../assets/special.png"

function Product(){
    return(
        <div className="container-dad">
            <h2>Explore <span className="btf-color">our coffee</span> collection</h2>
            <div className="container-products">
                <motion.div initial={{ x: +300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 5, ease: "easeIn" }} whileHover={{ scale: 1.1 }} className="content-products">
                    <div>
                        <h2>Mountain Classic</h2>
                        <p>Notes of dark chocolate and nuts. Perfect for everyday sipping.</p> 
                    </div>
                    <div>
                        <img id="img" src={Mountain} alt="mountain image" />
                    </div>
                </motion.div>
                <motion.div initial={{ x: +300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 5, ease: "easeIn" }} whileHover={{ scale: 1.1 }} className="content-products">
                    <div>
                        <h2>Bold Aurora</h2>
                        <p>Full-bodied with balanced citrus acidity and a rich aroma.</p> 
                    </div>
                    <div>
                        <img id="img" src={Bold} alt="bold image" />
                    </div>
                </motion.div>
                <motion.div initial={{ x: +300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 5, ease: "easeIn" }} whileHover={{ scale: 1.1 }} className="content-products">
                    <div>
                        <h2>Organic Fields</h2>
                        <p>Grown without pesticides, offering a smooth and floral profile.</p> 
                    </div>
                    <div>
                        <img id="img" src={Organic} alt="organic image" />
                    </div>
                </motion.div>
                <motion.div initial={{ x: +300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 5, ease: "easeIn" }} whileHover={{ scale: 1.1 }} className="content-products">
                    <div>
                        <h2>Special – Micro Lot</h2>
                        <p>Rare, award-winning beans roasted to order. right-now</p> 
                    </div>
                    <div>
                        <img id="img" src={Special} alt="special image" />
                    </div>
                </motion.div>
            </div> 
        </div>
    );
}

export default Product;