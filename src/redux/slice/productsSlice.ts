import { getProductsData, ProductsProps } from "@/data";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

interface ProductsState {
  products: ProductsProps[];
  search: string;
  loading: boolean;
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  search: "",
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const products = await getProductsData();
    return products;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<ProductsProps[]>) => {
          state.products = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = action.error.message || "Failed to fetch products";
        state.loading = false;
      });
  },
});

export const { setSearch } = productsSlice.actions;
export default productsSlice.reducer;
