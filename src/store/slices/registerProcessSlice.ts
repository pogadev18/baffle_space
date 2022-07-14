import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '@/store/store';

export interface RegisterProcessState {
  isOnRegisterProcess: boolean;
}

const initialState: RegisterProcessState = {
  isOnRegisterProcess: false,
};

export const registerProcessSlice = createSlice({
  name: 'registerProcess',
  initialState,
  reducers: {
    confirmIsOnRegisterProcess: (state) => {
      state.isOnRegisterProcess = true;
    },
    abortIsOnRegisterProcess: (state) => {
      state.isOnRegisterProcess = false;
    },
  },
});

export const { confirmIsOnRegisterProcess, abortIsOnRegisterProcess } =
  registerProcessSlice.actions;

export const selectIsOnRegisterProcess = (state: RootState) =>
  state.registerProcess.isOnRegisterProcess;

export default registerProcessSlice.reducer;
