/*
 * @Author: Ada J
 * @Date: 2024-02-29 11:03:20
 * @LastEditTime: 2024-02-29 11:33:47
 * @Description: 
 */
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice 
  }
})

export default store;