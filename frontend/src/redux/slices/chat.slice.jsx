import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import clients, { thunkHandler } from "../../services/api.service";
import { toast } from "react-toastify";

const initialState = {
  status: "idle",
  chat: null,
};

export const askGPT = createAsyncThunk("chats/askGPT", ({ data }, thunkAPI) => {
  const response = thunkHandler(
    clients.default.client({
      method: "POST",
      url: "/chat",
      data,
    }),
    thunkAPI
  );
  return response;
});

export const chatSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(askGPT.pending, (state) => {
        state.status = "loading";
      })
      .addCase(askGPT.fulfilled, (state, action) => {
        const response = action.payload.data;
        state.status = "succeeded";
        state.chat = [...state.chat, response];
      })
      .addCase(askGPT.rejected, (state, action) => {
        state.status = "failed";
        toast.error(action.payload?.data?.message);
      })
  },
});

export default chatSlice.reducer;