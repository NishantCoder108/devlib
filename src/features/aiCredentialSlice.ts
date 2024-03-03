import { createSlice } from "@reduxjs/toolkit";

const openAiKey: string | null = null;

export const aiCredentialSlice = createSlice({
    name: "aiCredential",
    initialState: openAiKey,
    reducers: {
        addAiCredential: (_, action) => {
            return action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { addAiCredential } = aiCredentialSlice.actions;

export default aiCredentialSlice.reducer;
