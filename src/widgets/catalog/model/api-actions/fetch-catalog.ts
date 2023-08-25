import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError, AxiosInstance } from 'axios';
import { toast } from 'react-toastify';

import { AppDispatch, State } from '../../../../app/provider/store';
import { Good } from '../../../../entities/good';
import { APIRoute } from '../../../../shared/lib/const/api-routes';

export const fetchCatalog = createAsyncThunk<Good[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'Catalog/fetchCatalog',
  async (_arg, {extra: axios}) => {
    try {
      const { data } = await axios.get<Good[]>(APIRoute.Goods);

      return data;
    } catch (err) {
      if (err instanceof AxiosError && err.response?.status !== 401) {
        toast.error('Catalog loading failed.');
      }
      throw err;
    }
  },
);
