import { createSlice } from "@reduxjs/toolkit";
import data from "../data";

const usersSlice = createSlice({
  name: "users",
  initialState: data,
  reducers: {
    newUser: (state, action) => {
      state.users.push(action.payload);
    },
    editUser: (state, action) => {
      const { id, name, email } = action.payload;
      const editingUSer = state.users.find((use) => use.id == id);
      if (editingUSer) {
        (editingUSer.name = name), (editingUSer.email = email);
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      const editingUSer = state.users.find((use) => use.id == id);
      if (editingUSer) {
        state.users = state.users.filter((f) => f.id != id);
      }
    },
  },
});

export const { newUser, editUser, deleteUser } = usersSlice.actions;
export default usersSlice.reducer;
