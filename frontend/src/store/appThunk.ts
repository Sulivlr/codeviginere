import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../axiosApi';
import {DecodedMessage, EncodedMessage, Msg} from '../types';

export const encodeMessage = createAsyncThunk<EncodedMessage, Msg>(
  'encode/message',
  async (apiEncode) => {
    const {data: message} = await axiosApi.post(`/encode`, apiEncode);
    return message;
  }
);

export const decodeMessage = createAsyncThunk<DecodedMessage, Msg>(
  'decode/message',
  async (apiDecode) => {
    const {data: message} = await axiosApi.post(`/decode`, apiDecode);
    return message;
  }
);
