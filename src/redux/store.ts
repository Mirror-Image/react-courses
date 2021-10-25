import {applyMiddleware, compose, createStore} from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    //@ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
);


export type RootState = ReturnType<typeof store.getState>

export default store;
