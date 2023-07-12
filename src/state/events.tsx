import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface EventState {
  name: string
}

const initialState = {
  name: ''
}

export const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setEventName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    }
  }
})

export const { setEventName } = eventSlice.actions
