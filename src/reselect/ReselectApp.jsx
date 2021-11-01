import React from 'react'
import Header from "./containers/Header";
import MainSection from "./containers/MainSection";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "./reducers";

const store = createStore(reducer);

const ReselectApp = () => (
  <Provider store={store}>
    <div>
      <Header />
      <MainSection />
    </div>
  </Provider>
);

export default ReselectApp;
