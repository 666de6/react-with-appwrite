import { createSlice } from "@reduxjs/toolkit";
import authService from "../appwrite/auth";

const initialState = {
  status: false,
  userData: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.status = true;
      sessionStorage.setItem('logedIn', state.status);
      state.userData = action.payload.userData;
    },
    logout: (state) => {
      state.status = false;
      sessionStorage.setItem('logedIn', false);
      state.userData = null;
    }
  }
})

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;