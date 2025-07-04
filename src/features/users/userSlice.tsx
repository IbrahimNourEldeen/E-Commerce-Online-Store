import { createSlice } from "@reduxjs/toolkit";

interface UserData {
  name: string;
  phone: string;
  password: string;
}

interface UserState {
  isAuthed: boolean;
  data: UserData;
}

const initialState: UserState = {
  isAuthed: false,
  data: {
    name: "",
    phone: "",
    password: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    LoginUser: (state, action) => {
      state.isAuthed = true;
      state.data = action.payload;
    },
    LogoutUser: (state) => {
      state.isAuthed = false;
      state.data = { name: "", phone: "", password: "" };
    },
  },
});

export default userSlice.reducer;
export const { LoginUser, LogoutUser } = userSlice.actions;
