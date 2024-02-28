import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface UserState {
    email: string | null;
    accessToken: string;
    emailVerified: boolean;
    uid: string;
}

const user: UserState = {
    email: "",
    accessToken: "",
    emailVerified: false,
    uid: "",
};

export const authSlice = createSlice({
    name: "auth",
    initialState: user,
    reducers: {
        signInUser: (state, action: PayloadAction<UserState>) => {
            return { ...state, ...action.payload };
        },
        logoutUser: () => {
            return {
                email: "",
                accessToken: "",
                emailVerified: false,
                uid: "",
            };
        },
    },
});

// Action creators are generated for each case reducer function
export const { signInUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
