import { configureStore } from "@reduxjs/toolkit";

import { languagePropertiesReducer } from "./slices/languageSlice";
import { skillPropertiesReducer } from "./slices/skillSlice";
import { attributesReducer } from "./slices/attributesSlice";

export const store = configureStore({
  reducer: {
    languagePropertiesReducer,
    skillPropertiesReducer,
    attributesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
