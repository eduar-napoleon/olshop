import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../../../utils/AxiosWrapper";

export const allProduct = createAsyncThunk("allProduct", async (thunkAPI) => {
  const body = {
    page: 1,
    limit: 50,
  };
  const config = {
    headers: {
      "Content-Type": "application/json",
      "sw-access-key": "SWSCRNHTCEHIWKH5VJB4EJBZSG",
      "sw-context-token": "SWSCRNHTCEHIWKH5VJB4EJBZSG",
    },
  };
  const response = await Axios.post("/product", body, config)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
});

export const allProductSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    isFetching: false,
    isSuccess: false,
    isError: false,
  },
  reducers: {
    // allProducts: (state) => {
    //   state.isError = false;
    //   state.isSuccess = false;
    //   state.isFetching = false;

    //   return state;
    // },
  },
  extraReducers: {
    [allProduct.fulfilled]: (state, action) => {
        // console.log(payload, "payload");
      state.isFetching = false;
      state.isSuccess = true;
      state.products = action.payload;
    },
    [allProduct.pending]: (state) => {
      state.isFetching = true;
    },
    [allProduct.rejected]: (state, action) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
  },
});

export const { allProducts } = allProductSlice.actions;
export const allProductsSelector = (state) => state.products;
