import React, {useCallback, useEffect, useMemo, useState} from "react";
import {Modal} from "./portal/portal";

const productData = [
  {
    id: 10001,
    image: 'https://via.placeholder.com/600/56a8c2',
    price: 14.99,
    title: 'headphones',
    inStock: 14,
  },
  {
    id: 10002,
    image: 'https://via.placeholder.com/600/d32776',
    price: 2.99,
    title: 'batteries',
    inStock: 105,
  },
  {
    id: 10003,
    image: 'https://via.placeholder.com/600/771796',
    price: 52.99,
    title: 'keyboard',
    inStock: 37,
  },
  {
    id: 10004,
    image: 'https://via.placeholder.com/600/92c952',
    price: 25.98,
    title: 'mice',
    inStock: 57,
  },
];

const getProducts = () => {
  return new Promise((resolve) => {
    const timoutId = setTimeout(() => {
      resolve(productData);
      clearTimeout(timoutId);
    }, 700);
  })
}

const themes =  {
  light: {
    color: '#000000',
    backgroundColor: '#ffffff'
  },
  dark: {
    color: '#ffffff',
    backgroundColor: '#000000'
  }
}

const ThemeContenxt = React.createContext(
  themes.light
);

const ProductItem = ({ image, price, title, inStock, handleDeleteItem, id }) => (
  <ThemeContenxt.Consumer>
    {(theme) => (
      <div style={{ color: theme.color }} className="productItem">
        <img src={image} alt={title} width={100} height={150} />
        <p>{title}</p>
        <div>
          <p>{price}$</p>
          <p>{inStock}</p>
        </div>
        <button
          onClick={() => handleDeleteItem(id)}
        >
          Delete product
        </button>
      </div>
    )}
  </ThemeContenxt.Consumer>
);

export const ProductShowcase = (props) => {
  /*const [productData, setProductData] = useState([
    {
      id: 10077,
      image: 'https://via.placeholder.com/600/92c952',
      price: 99.98,
      title: 'TEST!!!',
      inStock: 100,
    }
  ]);
  const [isLoading, setIsloading] = useState(false);*/
  const [theme, setTheme] = useState(themes.light);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [state, setState] = useState({
    data: [{
      id: 10077,
      image: 'https://via.placeholder.com/600/92c952',
      price: 99.98,
      title: 'TEST!!!',
      inStock: 100,
    }],
    isLoading: false,
  });

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  }

  const handleDeleteProductItem = useCallback((productId) => {
    setState(prevState => ({
      ...prevState,
      data: [...prevState.filter(({ id }) => productId !== id)],
    }));
  }, []);

  const toggleTheme = () => {
    setTheme(state => (
      state === themes.light
        ? themes.dark
        : themes.light
    ));
  }

  useEffect(() => {
    console.log('ComponentDidMount');
    setState(prevState => ({
      ...prevState,
      isLoading: true,
    }));
    getProducts()
      .then(data => {
        setState(prevState => ({
          isLoading: false,
          data: [...prevState.data, ...data],
        }))
      });

    return () => {
      console.log('ComponentWillUnmount');
    }
  }, []);

  useEffect(() => {
    console.log('ComponentDidUpdate', state.isLoading);

    if (!state.isLoading) {
      console.log('Data loading complete')
    }
  }, [state.isLoading]);

  const calculatedValue = useMemo(() => productData.map(product => ({
    ...product,
    description: 'TEST DESCRIPTION',
  })), [state.data]);

  return (
    <ThemeContenxt.Provider value={theme}>
      {state.isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div style={{ backgroundColor: theme.backgroundColor }} className="productWrapper">
            {Boolean(state.data.length) && state.data.map(({image, price, title, inStock, id}) => (
              <ProductItem
                handleDeleteItem={handleDeleteProductItem}
                key={id}
                image={image}
                title={title}
                price={price}
                inStock={inStock}
                id={id}
              />
            ))}
          </div>
          <div>
            <button
              onClick={toggleTheme}
            >
              toggle theme
            </button>
          </div>
        </>
      )}
      <button onClick={toggleModal}>Open modal window</button>
      {isModalOpen && (
        <Modal
          onClose={toggleModal}
        >
          <p>Hello World!</p>
        </Modal>
      )}
    </ThemeContenxt.Provider>
  );
}


class ProductShowcase2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: [],
      isLoading: false,
      currentTheme: themes.light,
    }
  }

  toggleTheme = () => {
    this.setState(state => ({
      currentTheme: state.currentTheme === themes.light
        ? themes.dark
        : themes.light
    }))
  }

  handleDeleteProductItem = (productId) => {
    this.setState(prevState => ({
      productData: prevState.productData.filter(({ id }) => productId !== id),
    }));
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    getProducts()
      .then(data => {
        this.setState({
          productData: data,
          isLoading: false,
        });
      });
  }

  render() {
    if (this.state.isLoading) {
      return <p>Page Loading....</p>
    }

    return (
    <ThemeContenxt.Provider value={this.state.currentTheme}>
      <div style={{ backgroundColor: this.state.currentTheme.backgroundColor }} className="productWrapper">
        {this.state.productData.length && this.state.productData.map(({
          image, price, title, inStock, id,
        }) => (
            <ProductItem
              handleDeleteItem={() => this.handleDeleteProductItem(id)}
              key={id}
              image={image}
              title={title}
              price={price}
              inStock={inStock}
            />
        ))}
      </div>
      <div>
        <button
          onClick={this.toggleTheme}
        >
          toggle theme
        </button>
      </div>
    </ThemeContenxt.Provider>
    );
  }
}
