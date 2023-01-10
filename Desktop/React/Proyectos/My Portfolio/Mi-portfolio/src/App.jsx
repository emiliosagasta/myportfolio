import Intro from "./components/intro/intro";
import About from "./components/about/About";
import ProductList from "./components/productList/ProductList";


const App = () => {
  return (
    <div>
        <Intro />
        <About />
        <ProductList />
    </div>
    );
  };

export default App;