import { configureStore } from "@reduxjs/toolkit";

import { languagePropertiesReducer } from "./slices/languageSlice";
import { intelligencePropertiesReducer } from "./slices/intelligenceSlice";

export const store = configureStore({
  reducer: {
    languagePropertiesReducer,
    intelligencePropertiesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
