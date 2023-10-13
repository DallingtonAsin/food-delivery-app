// streamChannelSlice.ts
import { RootState } from '../store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface StreamChannelState {
  unreadChannels: number;
  unreadMessages: number;
}

const initialState: StreamChannelState = {
    unreadChannels: 0,
    unreadMessages: 0
};

const streamChannelSlice = createSlice({
  name: 'streamChannel',
  initialState,
  reducers: {
    updateUnreadChannels(state, action: PayloadAction<number>) {
      state.unreadChannels = action.payload;
    },
    updateUnreadMessages(state, action: PayloadAction<number>) {
        state.unreadMessages = action.payload;
      },
  },
});

export const { updateUnreadChannels,updateUnreadMessages } = streamChannelSlice.actions;
export const selectUnreadChannels = (state: RootState) => state.streamChannel.unreadChannels
export const selectUnreadMessages = (state: RootState) => state.streamChannel.unreadMessages
export default streamChannelSlice.reducer;
