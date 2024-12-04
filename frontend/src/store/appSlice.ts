import { createSlice } from '@reduxjs/toolkit';
import { decodeMessage, encodeMessage } from './appThunk';

interface AppState {
  encodedMessage: string;
  decodedMessage: string;
  error: string | null;
}

const initialState: AppState = {
  encodedMessage: '',
  decodedMessage: '',
  error: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(encodeMessage.fulfilled, (state, action) => {
        state.encodedMessage = action.payload.encoded;
        state.error = null;
      })
      .addCase(encodeMessage.rejected, (state, action) => {
        state.error = action.error.message || 'Encoding failed';
      })
      .addCase(decodeMessage.fulfilled, (state, action) => {
        state.decodedMessage = action.payload.decoded;
        state.error = null;
      })
      .addCase(decodeMessage.rejected, (state, action) => {
        state.error = action.error.message || 'Decoding failed';
      });
  },
});

export default appSlice.reducer;
