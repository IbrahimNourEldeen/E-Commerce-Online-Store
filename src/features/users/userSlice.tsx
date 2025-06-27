import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthed:false,
    data: {
        name:"",
        phone:"",
        password:""
    }

}
const userSlice = createSlice({
    name:"user",
    initialState,
    reducers: {
        LoginUser:(state, action) => {
            state.isAuthed=true;
            state.data.name = action.payload.name;
            state.data.phone = action.payload.phone;
            state.data.password = action.payload.password;
        }
    }
});

export default userSlice.reducer;
export const {LoginUser} = userSlice.actions