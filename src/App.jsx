import Header from "./components/Header";
import Home from "./components/Home";
import Benefits from "./components/Benefits";
import Products from "./components/Products";
import History from "./components/History";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App(){
    return(
        <div>
            <Header />
            <section id="home"><Home /></section>
            <section id="benefits"><Benefits /></section>
            <section id="history"><History /></section>
            <section id="products"><Products /></section>
            <section id="newsletter"><Newsletter /></section>
            <Footer />
        </div>
    );
}

export default App;