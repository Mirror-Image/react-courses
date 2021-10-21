import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getProductById} from "../../api/products";
import {connect}  from "react-redux";
import {
  clearSelectedProduct,
  setSelectedProduct,
} from "../../redux/actions/products";
import Spinner from "../Spinner/Spinner";
import "./styles.css";

const ProductDetail = ({product, clearSelectedProduct, setSelectedProduct }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { image, title, description, price } = product;

  const { productId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    setSelectedProduct(productId)
      .finally(() => {
        setIsLoading(false);
      });

    return () => {
      clearSelectedProduct();
    }
  }, [productId]);

  return (
    <div className="container">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="image__wrapper">
            <img className="image" src={image} alt={title} />
          </div>
          <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{price}$</p>
          </div>
        </>
      )}
    </div>
  );
}

const mapStateToProps = store => ({
  product: store.selectedProduct.product,
});

const mapDispatchToProps = {
  clearSelectedProduct,
  setSelectedProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
