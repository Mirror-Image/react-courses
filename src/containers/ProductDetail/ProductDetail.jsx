import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getProductById} from "../../api/products";
import {useDispatch, useSelector} from "react-redux";
import {
  clearSelectedProduct,
  setSelectedProduct
} from "../../redux/actions/products";
import Spinner from "../Spinner/Spinner";
import "./styles.css";

const ProductDetail = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { image, title, description, price } = useSelector(
    store => store.selectedProduct.product
  );

  const { productId } = useParams();
  const dispatch = useDispatch();


  useEffect(() => {
    setIsLoading(true);
    getProductById(productId)
      .then(product => {
        dispatch(setSelectedProduct(product));
      })
      .finally(() => {
        setIsLoading(false);
      });

    return () => {
      dispatch(clearSelectedProduct());
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

export default ProductDetail;
