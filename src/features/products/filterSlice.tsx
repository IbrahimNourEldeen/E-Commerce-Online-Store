import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "./productSlice";
import { applyFilters } from "./thunks/filterThunks";

type productState = {
  selectedBrands: string[] | [];
  selectedReview: string | null;
  selectedPrice: string | null;
  selectedDiscount: string | null;
  filteredProducts: Product[] | [];
};

const initialState: productState = {
  selectedBrands: [],
  selectedReview: "all",
  selectedPrice: "all",
  selectedDiscount: "all",
  filteredProducts: [],
};

const filteredSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSelectedBrands: (state, action) => {
      state.selectedBrands = action.payload;
    },
    setSelectedReview: (state, action) => {
      state.selectedReview = action.payload;
    },
    setSelectedPrice: (state, action) => {
      state.selectedPrice = action.payload;
    },
    setSelectedDiscount: (state, action) => {
      state.selectedDiscount = action.payload;
    },

    AddFilteredProducts: (state, action: PayloadAction<Product[]>) => {
      state.filteredProducts = action.payload;
    },
    ClearFilterdProducts: (state) => {
      state.filteredProducts = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(applyFilters.fulfilled, (state, action) => {
      state.filteredProducts = action.payload;
    });
  },
});

export default filteredSlice.reducer;
export const {
  setSelectedBrands,
  setSelectedReview,
  setSelectedPrice,
  setSelectedDiscount,
  AddFilteredProducts,
  ClearFilterdProducts,
} = filteredSlice.actions;
