import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../../../utils/AxiosWrapper";
import { useDispatch, useSelector } from "react-redux";


export const allProduct = createAsyncThunk(
  "allProduct",
  async (payload, { dispatch, rejectWithValue }) => {
    try {
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
      const response = await Axios.post("/product", body, config);
      localStorage.setItem("id", response.data.elements[0].id)
      return response.data.elements;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response);
    }
  }
);
const idProduct = localStorage.getItem("id")
export const fetchProductId = createAsyncThunk(
  "productId",
  async (payload, { dispatch, rejectWithValue }) => {
    try {
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
      const response = await Axios.post((`/product/${idProduct}`), body, config);
      return response.data.elements.extensions.id;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response);
    }
  }
);

export const allProductSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    isFetching: false,
    isSuccess: false,
    isError: false,
    productId: "",
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
    [allProduct.fulfilled]: (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.products = payload;
      state.productId = payload
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
