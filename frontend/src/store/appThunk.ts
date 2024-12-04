import {createAsyncThunk} from '@reduxjs/toolkit';
import {DecodedMessage, EncodedMessage, Msg} from '../types';
import axiosApi from '../axiosApi';

export const encodeMessage = createAsyncThunk<EncodedMessage, Msg>(
  'encode/message',
  async (messageData: Msg) => {
    const { data: messages } = await axiosApi.post(`/encode`, messageData);
    return messages;
  }
);

export const decodeMessage = createAsyncThunk<DecodedMessage, Msg>(
  'decode/message',
  async (messageData: Msg) => {
    const {data: messages} = await axiosApi.post('/decode', messageData);
    return messages;
  }
);