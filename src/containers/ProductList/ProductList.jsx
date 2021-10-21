import {useEffect} from "react";
import {connect} from "react-redux";
import {setAllProducts} from "../../redux/actions/products";
import ProductItem from "../ProductItem/ProductItem";
import {getAllProducts} from "../../api/products";
import "./styles.css";

const ProductList = ({ products, setAllProducts }) => {
  useEffect(() => {
    getAllProducts()
      .then(products => {
        setAllProducts(products);
      });
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <div className="container">
        {Boolean(products.length) && products.map(({ id, image, price, title }) => (
          <ProductItem
            id={id}
            key={id}
            image={image}
            price={price}
            title={title}
          />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = store => ({
  products: store.allProducts.products,
})

const mapDispatchToProps = {
  setAllProducts,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
