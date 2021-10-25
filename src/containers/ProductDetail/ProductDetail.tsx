import {useParams} from "react-router-dom";
import {FC, useEffect, useState} from "react";
import {connect}  from "react-redux";
import {
  clearSelectedProduct,
  setSelectedProduct,
} from "../../redux/actions/products";
import Spinner from "../Spinner/Spinner";
import "./styles.css";
import {IProduct} from "../../api/products";
import {RootState} from "../../redux/store";

type IProductDetailProps = {
  product: IProduct,
  clearSelectedProduct: () => void,
  setSelectedProduct: (productId: number | string) => Promise<void | IProduct>,
  isSelected?: boolean
}

const ProductDetail: FC<IProductDetailProps> = ({
  product,
  clearSelectedProduct,
  setSelectedProduct,
  isSelected,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { image, title, description, price } = product;

  const { productId } = useParams<{ productId: string }>();

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

const mapStateToProps = (store: RootState) => ({
  product: store.selectedProduct.product,
});

const mapDispatchToProps = {
  clearSelectedProduct,
  setSelectedProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
