import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore, Action, ThunkAction } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import todosReducer from './slices/todoSlice'

const store = configureStore({
  reducer: {
    todos: todosReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunkMiddleware),
  preloadedState: {
    // Add your initial state here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
