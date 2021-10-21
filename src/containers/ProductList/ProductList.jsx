import "./styles.css";
import {useDispatch, useSelector} from "react-redux";
import ProductItem from "../ProductItem/ProductItem";
import {useEffect} from "react";
import {getAllProducts} from "../../api/products";
import {setAllProducts} from "../../redux/actions/products";

const ProductList = () => {
  const products = useSelector(store => store.allProducts.products);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllProducts()
      .then(products => {
        dispatch(setAllProducts(products));
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

export default ProductList;
