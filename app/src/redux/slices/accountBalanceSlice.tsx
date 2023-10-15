// accountBalanceSlice.ts
import { RootState } from '../store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BalanceState {
  accountBalance: any;
}

const initialState: BalanceState = {
  accountBalance: 0,
};

const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    updateAccountBalance(state, action: PayloadAction<any>) {
      state.accountBalance = action.payload;
    },
  },
});

export const { updateAccountBalance } = balanceSlice.actions;
export const selectAccountBalance = (state: RootState) => state.balance.accountBalance
export default balanceSlice.reducer;
