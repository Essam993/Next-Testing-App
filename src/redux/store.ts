import { configureStore } from '@reduxjs/toolkit';
import stickyNotesReducer from './features/stickyNotesSlice';

export const store = configureStore({
  reducer: {
    stickyNotes: stickyNotesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;