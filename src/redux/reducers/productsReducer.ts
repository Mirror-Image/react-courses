import {ActionTypes} from "../../constants/actionTypes";
import {IProduct} from "../../api/products";

type IAllProductInitialState = {
  products: Array<IProduct>
}

const initialState: IAllProductInitialState = {
  products: [],
}

export const productsReducer = (
  state = initialState,
  { type, payload }: { type: string, payload: any }
) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return {
        products: [...payload],
      };
    default:
      return state;
  }
}
