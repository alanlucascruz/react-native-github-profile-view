import {configureStore} from '@reduxjs/toolkit';
import user from './reducers/userSlice';

export default configureStore({
  reducer: {
    user,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
