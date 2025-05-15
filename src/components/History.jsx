import "./History.css"
import { motion } from "framer-motion";
import OurStory from "../assets/our-story.png"

function History(){
    return(
        <div className="container-wrap">
            <motion.div initial={{ x:-500, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 3, ease: "easeOut" }} className="container-history">
                <div>
                    <motion.img whileHover={{ rotate: 10 }} id="ourStory" src={OurStory} alt="Our Story image" />
                </div>
                <div className="content-text">
                    <h2>The story <span className="btf-color">behind YourCoffe</span></h2>
                    <p>YourCoffe was born from a deep love for authentic coffee and a mission to connect people through sensory experiences. <span className="btf-color">Since 2018, we’ve traveled across Brazil in search of the finest beans, supporting local farmers and promoting</span> a more conscious and fair supply chain.</p>
                </div>
            </motion.div>  
        </div>
    );
}

export default History;