import {Link} from "react-router-dom";
import {FC} from "react";
import "./styles.css";

type IProductItemProps = {
  id: number | string,
  image: string,
  price: string,
  title: string,
}

const ProductItem: FC<IProductItemProps> = ({
  id,
  image,
  price,
  title ,
}) => {

  return (
    <Link className="item" to={`/product/${id}`}>
      <div>
        <img className="item__img" src={image} alt={title} />
      </div>
      <div>
        <p className="item__link--title">{title}</p>
      </div>
      <div>
        {price}$
      </div>
    </Link>
  );
}

export default ProductItem;
