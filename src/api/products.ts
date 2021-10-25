import {GET_ALL_PRODUCTS_URL} from "../constants/productsURL";

export type IProduct = {
  id: number,
  title: string,
  price: string,
  category: string,
  description: string,
  image: string,
}

export const getAllProducts = async (): Promise<IProduct[]> => {
  const response = await fetch(
    GET_ALL_PRODUCTS_URL, {
      method: "GET",
    }
  );

  return response.json();
}

export const getProductById = async (productId: number | string): Promise<IProduct> => {
  const response = await fetch(
    `${GET_ALL_PRODUCTS_URL}/${productId}`, {
      method: "GET",
    }
  );

  return response.json();
}
