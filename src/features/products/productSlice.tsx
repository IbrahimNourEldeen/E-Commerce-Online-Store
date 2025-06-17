import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type Product = {
  id: number;
  title: string;
  price: number;
  images: string[]; 
  category: string;
  brand:string;
  discountPercentage:number;
  reviews:string[];
};

type ProductState = {
  products: Product[] | [];
};

const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    AddProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
});

export default productSlice.reducer;
export const { AddProducts } = productSlice.actions;
