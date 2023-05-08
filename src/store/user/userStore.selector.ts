import { RootState } from "../rootReducer";

export const currentUserSelector = (state: RootState) => state.user.currentUser;
