import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import authSliceReducer from "../features/auth/authSlice";
// import conversationsSliceReducer from "../features/conversations/conversationsSlice";
// import messagesSliceSliceReducer from "../features/messages/messagesSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSliceReducer,
    // conversations: conversationsSliceReducer,
    // messages: messagesSliceSliceReducer,
  },

  // devTools: !process.env.NODE_ENV === "production",
  
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
