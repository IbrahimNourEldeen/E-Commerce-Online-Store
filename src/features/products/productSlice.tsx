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
  products: Product[] | null;
  filteredProducts: Product[] | null;
};

const initialState: ProductState = {
  products: null,
  filteredProducts:null
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    AddProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    AddFilteredProducts: (state, action: PayloadAction<Product[]>) => {
      state.filteredProducts = action.payload;
    },
    ClearFilterdProducts: (state) => {
      state.filteredProducts = null
    }
  },
});

export default productSlice.reducer;
export const { AddProducts, AddFilteredProducts, ClearFilterdProducts } = productSlice.actions;
