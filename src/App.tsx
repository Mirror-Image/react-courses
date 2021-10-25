import './App.css';
import Header from "./containers/Header";
import ProductList from "./containers/ProductList/ProductList";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ProductDetail from "./containers/ProductDetail/ProductDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Switch>
            <Route path="/product/:productId" component={ProductDetail} />
            <Route path="/" component={ProductList} exact />
            <Route>
              <div>404 Page Not Found!</div>
            </Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
