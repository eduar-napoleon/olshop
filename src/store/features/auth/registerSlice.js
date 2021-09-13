import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../../../utils/AxiosWrapper";

export const registerUser = createAsyncThunk(
  "users/register",
  async ({ email, password }, thunkAPI) => {
    const body = {
      email,
      password,
      salutationId: "a8a0ba438579415c881f5ec63b976ac2",
      firstName: "test",
      lastName: "test",
      acceptedDataProtection: true,
      storefrontUrl: "default.headless0",
      billingAddress: {
        id: "",
        customerId: "1",
        countryId: "ddb733b9b5e54f44b47319e32f7200f2",
        salutationId: "a8a0ba438579415c881f5ec63b976ac2",
        firstName: "test",
        lastName: "test",
        zipcode: "1060",
        city: "jakarta",
        street: "menteng",
      },
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
        "sw-access-key": "SWSCCGQ0QXPBZ0F4CWJIS08WBQ",
        "sw-context-token": "SWSCCGQ0QXPBZ0F4CWJIS08WBQ",
      },
    };

    const response = await Axios.post("/account/register", body, config)
      .then((res) => {
        console.log(res);
        // window.location.href = ("/")
      })
      .catch((err) => {
        console.log(err);
      });
    // if (response.status === 200) {
    //   // window.location.href = "/";
    // }
  }
);

export const loginUser = createAsyncThunk(
  "user/login",
  async ({ email, password }, thunkAPI) => {
    const body = {
      email,
      password,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
        "sw-access-key": "SWSCCGQ0QXPBZ0F4CWJIS08WBQ",
        "sw-context-token": "1",
      },
    };
    const loginres = await Axios.post("/account/login", body, config)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.contextToken)
        // window.location.href = ("/")
      })
      .catch((err) => {
        console.log(err);
      });
      // if (loginres.status === 200) {
      //   window.location.href = ("/");
      // }
  }
);

export const regisSlice = createSlice({
  name: "regis",
  initialState: {
    email: "",
    password: "",
    salutationId: "a8a0ba438579415c881f5ec63b976ac2",
    firstName: "test",
    lastName: "test",
    acceptedDataProtection: true,
    storefrontUrl: "default.headless0",
    billingAddress: {
      id: "",
      customerId: "1",
      countryId: "f7ac06bc6ef14234a1d6d6c8c39a1f98",
      salutationId: "a8a0ba438579415c881f5ec63b976ac2",
      firstName: "test",
      lastName: "test",
      zipcode: "10260",
      city: "jakarta",
      street: "menteng",
    },
    errorMessage: "",
    isFetching: false,
    isSuccess: false,
    isError: false,
  },
  reducers: {
    regisUser: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;

      return state;
    },
  },
  extraReducers: {
    [registerUser.fulfilled]: (state, action) => {
      //   console.log("payload", payload);
      state.isFetching = false;
      state.isSuccess = true;
      state.email = action.payload;
      state.password = action.payload
    },
    [registerUser.pending]: (state) => {
      state.isFetching = true;
    },
    [registerUser.rejected]: (state, action) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = action.payload;
    },
    [loginUser.fulfilled]: (state, action) => {
        state.isFetching = false;
        state.isSuccess = true;
        state.email = action.payload;
        state.password = action.payload
    },
    [loginUser.pending]: (state) => {
        state.isFetching = true
    },
    [loginUser.rejected]: (state, action) => {
        state.isFetching = false;
        state.isError = true;
        state.errorMessage = action.payload
    }
  },
});


export const { regisUser } = regisSlice.actions;
export const regisSelector = (state) => state.regis;
