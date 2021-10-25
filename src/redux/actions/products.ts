import {ActionTypes} from "../../constants/actionTypes";
import {getAllProducts, getProductById, IProduct} from "../../api/products";
import {Dispatch} from "redux";
import {RootState} from "../store";

export const setAllProducts = () => (dispatch: Dispatch, state: () => RootState): void =>  {
  getAllProducts()
    .then(products => {
      dispatch({
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
      })

      console.log(state());
    });
}

export const setSelectedProduct = (
  productId: number | string
) => (dispatch: Dispatch): Promise<void | IProduct> => {
  return getProductById(productId)
    .then(product => {
      dispatch({
        type: ActionTypes.SET_SELECTED_PRODUCT,
        payload: product,
      });
    })
}

export const clearSelectedProduct = () => (dispatch: Dispatch): void => {
  dispatch({
      type: ActionTypes.CLEAR_SELECTED_PRODUCT,
  });
}
