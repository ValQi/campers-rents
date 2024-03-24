import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65fae69e3909a9a65b1beabd.mockapi.io';

export const getAllCampers = createAsyncThunk(
  'advert/getCampers',
async (_, thunkApi) => {
  try {
    const responseCamp = await axios.get('/advert');
    return responseCamp.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
}
);
export const getCampersById = createAsyncThunk(
  'advert/getCampersById',
  async (id, thunkAPI) => {
    try {
      const responseCamp = await axios.get(`/advert/${id}`);
      return responseCamp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
