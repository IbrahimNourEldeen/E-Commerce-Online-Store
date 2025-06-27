import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productSlice";
import filteredReducer from "../features/products/filterSlice";
import userReducer from "../features/users/userSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    filter: filteredReducer,
    user : userReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
