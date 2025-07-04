import { createAsyncThunk } from "@reduxjs/toolkit";
import type { Product } from "../productSlice";
import type { RootState } from "../../../store/Store";

type Review = {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
};

const getAverageRating = (reviews: Review[]) => {
  if (!reviews?.length) return 0;
  const total = reviews.reduce((sum, r) => sum + r.rating, 0);
  return total / reviews.length;
};

export const applyFilters = createAsyncThunk<Product[], void, { state: RootState }>(
  "filter/applyFilters",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const { products } = state.products;
    const { selectedBrands, selectedPrice, selectedReview, selectedDiscount } = state.filter;

    let filtered: Product[] = products;

    if (selectedBrands.length > 0) {
      filtered = filtered.filter((product) => selectedBrands.includes(product.brand));
    }

    switch (selectedReview) {
      case "up to four":
        filtered = filtered.filter((product) => getAverageRating(product.reviews) >= 4);
        break;
      case "up to three":
        filtered = filtered.filter((product) => getAverageRating(product.reviews) >= 3);
        break;
      case "up to two":
        filtered = filtered.filter((product) => getAverageRating(product.reviews) >= 2);
        break;
      case "up to one":
        filtered = filtered.filter((product) => getAverageRating(product.reviews) >= 1);
        break;
      case "all":
      default:
        break;
    }

    switch (selectedPrice) {
      case "Under EGP 100":
        filtered = filtered.filter((product) => product.price <= 100);
        break;
      case "Under EGP 400":
        filtered = filtered.filter((product) => product.price <= 400);
        break;
      case "Under EGP 800":
        filtered = filtered.filter((product) => product.price <= 800);
        break;
      case "Under EGP 1600":
        filtered = filtered.filter((product) => product.price <= 1600);
        break;
      case "EGP 1,600 & above":
        filtered = filtered.filter((product) => product.price >= 1600);
        break;
      case "all":
      default:
        break;
    }

    switch (selectedDiscount) {
      case "10% off or less":
        filtered = filtered.filter((product) => product.discountPercentage >= 10);
        break;
      case "25% off or more":
        filtered = filtered.filter((product) => product.discountPercentage >= 25);
        break;
      case "50% off or more":
        filtered = filtered.filter((product) => product.discountPercentage >= 50);
        break;
      case "70% off or more":
        filtered = filtered.filter((product) => product.discountPercentage >= 70);
        break;
      case "all":
      default:
        break;
    }

    return filtered;
  }
);
