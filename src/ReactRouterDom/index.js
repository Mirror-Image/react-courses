import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./components/Header";
import "./style.css";
import {useState} from "react";
import Post from "./pages/Post";

const ReactRouterApp = () => {
  const [isLogin, setIsLogin] = useState(false);

  const toggleLogin = () => {
    setIsLogin(prevState => !prevState);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Header isLogin={isLogin} />
        <div>
          <button onClick={toggleLogin}>
            {isLogin ? "Log out" : "Log in"}
          </button>
        </div>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/profile">
            {isLogin ? <Profile /> : <Redirect to="/" />}
            {/*<Profile isLogin={isLogin} />*/}
          </Route>
          <Route path="/post/:id" component={Post} />
          <Route path="/" component={Home} exact />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default ReactRouterApp;
