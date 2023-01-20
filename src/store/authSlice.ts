import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  value: number;
}

// Define the initial state using that type
const initialState: AuthState = {
  value: 0,
};

export const authSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setAuth: () => {},
  },
});

const authReducer = authSlice.reducer;
export const { setAuth } = authSlice.actions;

export default authReducer;
