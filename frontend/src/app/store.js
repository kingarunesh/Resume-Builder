import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { condidateProfileApi } from "../services/condidateProfileApi";

export const store = configureStore({
    reducer: {
        [condidateProfileApi.reducerPath]: condidateProfileApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(condidateProfileApi.middleware),
});

setupListeners(store.dispatch);
