import { configureStore } from '@reduxjs/toolkit'
import { eventSlice } from './state/events'

const store = configureStore({
  reducer: {
    [eventSlice.name]: eventSlice.reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store