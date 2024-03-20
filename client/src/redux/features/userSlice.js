import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: localStorage.getItem("healingUser")
      ? JSON.parse(localStorage.getItem("healingUser"))
      : null,
  },
  reducers: {
    setUser: (state, action) => {
      localStorage.setItem("healingUser", JSON.stringify(action.payload));
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
