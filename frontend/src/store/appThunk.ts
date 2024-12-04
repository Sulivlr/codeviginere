import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../app/axiosApi';
import {Msg} from '../types';

export const encodeMessage = createAsyncThunk<void, Msg>(
  'encode/message',
  async (apiEncode) => {
    await axiosApi.post(`/encode`, apiEncode);
  });

export const decodeMessage = createAsyncThunk<void, Msg>(
  'decode/message',
  async (apiDecode) => {
    await axiosApi.post('/decode', apiDecode);
  });