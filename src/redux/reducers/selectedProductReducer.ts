import {ActionTypes} from "../../constants/actionTypes";
import {IProduct} from "../../api/products";

type ISelectedProductInitialState = {
  product: null | IProduct
}

const initialState: ISelectedProductInitialState = {
  product: null,
};

const selectedProductReducer = (
  state = initialState,
  { type, payload }: { type: string, payload: any }
) => {
  switch (type) {
    case ActionTypes.SET_SELECTED_PRODUCT:
      return {
        product: payload,
      };
    case ActionTypes.CLEAR_SELECTED_PRODUCT:
      return initialState;
    default:
      return state;
  }
}

export default selectedProductReducer;
