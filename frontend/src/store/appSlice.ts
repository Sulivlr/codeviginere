import {createSlice} from '@reduxjs/toolkit';
import {decodeMessage, encodeMessage} from './appThunk';

export interface AppState {
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
    builder.addCase(encodeMessage.pending, (state) => {
      state.error = null;
    }).addCase(encodeMessage.fulfilled, (state,action) => {
      state.encodedMessage = action.payload.encoded;
      state.error = null;
    }).addCase(encodeMessage.rejected, (state, action) => {
      state.error = action.error.message || 'error message';
    });

    builder.addCase(decodeMessage.pending, (state) => {
      state.error = null;
    }).addCase(decodeMessage.fulfilled, (state,action) =>  {
      state.error = null;
      state.decodedMessage = action.payload.decoded;
    }).addCase(decodeMessage.rejected, (state, action) => {
      state.error = action.error.message || 'error message';
    });
  },
  selectors: {
    selectAppEncode: (state) => state.encodedMessage,
    selectAppDecode: (state) => state.decodedMessage,
    selectAppError: (state) => state.error,
  }
});

export const appReducer = appSlice.reducer;

export const {
  selectAppEncode,
  selectAppDecode,
  selectAppError,
} = appSlice.selectors;