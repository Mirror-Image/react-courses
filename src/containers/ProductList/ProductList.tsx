import {FC, useEffect} from "react";
import {connect} from "react-redux";
import {setAllProducts} from "../../redux/actions/products";
import ProductItem from "../ProductItem/ProductItem";
import "./styles.css";
import {IProduct} from "../../api/products";
import {RootState} from "../../redux/store";

type IProductListProps = {
  products: Array<IProduct>,
  setAllProducts: () => void,
}

const ProductList: FC<IProductListProps> = ({ products, setAllProducts }) => {
  useEffect(() => {
    setAllProducts();
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

const mapStateToProps = (store: RootState) => ({
  products: store.allProducts.products,
})

const mapDispatchToProps = {
  setAllProducts,
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
