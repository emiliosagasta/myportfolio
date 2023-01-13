import "./productList.css"
import Product from "../product/Product"


const ProductList = () => {
  return (
    <div className="pl">
       <div className="pl-texts">
           <h1 className="pl-title"> Proyectos</h1> 
           <p className="pl-desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit praesentium quaerat natus pariatur eos vel quo enim nostrum obcaecati fugit, velit perspiciatis error nemo hic quod non quasi voluptatem repellendus.
           </p>
       </div>
       <div className="pl-list">
            <Product />
            <Product />
            <Product />
       </div> 
    </div>
  );
};

export default ProductList;
