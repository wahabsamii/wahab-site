import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  isAuth: false,
};

const userSlice = createSlice({
  name: "user",
  initialState, // Fixed the typo
  reducers: {
    signinSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.isAuth = true;
    },
    signoutSuccess: (state) => {
      state.currentUser = null;
      state.isAuth = false;
      state.error = null;
    },
  },
});

export const { signinSuccess, signoutSuccess } = userSlice.actions;
export default userSlice.reducer;
