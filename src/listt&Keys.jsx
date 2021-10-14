import React from "react";

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

class ProductItem extends React.Component {
  render() {
    const { image, price, title, inStock, handleDeleteItem } = this.props;

    return (
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
              onClick={handleDeleteItem}
            >
              Delete product
            </button>
          </div>
        )}
      </ThemeContenxt.Consumer>
    );
  }
}

export class ProductShowcase extends React.Component {
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
