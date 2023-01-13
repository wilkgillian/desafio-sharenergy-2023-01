import { configureStore } from "@reduxjs/toolkit";
import sliceUser from "./sliceUsers";

const store = configureStore({
  reducer: {
    user: sliceUser,
  },
});

export default store;
