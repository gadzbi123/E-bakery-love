import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { User } from "firebase/auth";

type UserStoreProps = { currentUser: null | User };

const initialState: UserStoreProps = {
  currentUser: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User | null>) => {
      state.currentUser = action.payload;
    },
  },
});

export const { setCurrentUser } = userSlice.actions;
export const userStoreReducer = userSlice.reducer;
