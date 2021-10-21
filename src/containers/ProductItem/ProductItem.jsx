import "./styles.css";
import {Link} from "react-router-dom";

const ProductItem = ({ id, image, price, title }) => {

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
