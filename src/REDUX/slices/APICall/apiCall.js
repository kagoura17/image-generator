// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// const initialState = {
//   ApiCall: [],
// };
// export const apiCall = createSlice({
//   name: "Api",
//   initialState,

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"; // Assuming you're using axios for API calls
import thunk from "redux-thunk";

const initialState = {
  apiData: [],
  loading: false,
  error: null,
};

export const apiCall = createSlice({
  name: "Api",
  initialState,
  reducers: {
    apiCallRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    apiCallSuccess: (state, action) => {
      state.loading = false;
      state.apiData = action.payload;
    },
    apiCallFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Async action creator to make the API call
export const fetchApiData = () => async (dispatch) => {
  try {
    dispatch(apiCall.actions.apiCallRequest());
    const response = await axios.get("your_api_endpoint_here");
    dispatch(apiCall.actions.apiCallSuccess(response.data));
  } catch (error) {
    dispatch(apiCall.actions.apiCallFailure(error.message));
  }
};

export default apiCall.reducer;
