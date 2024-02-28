import { combineReducers } from "@reduxjs/toolkit";

import chatReducer from "../slices/chat.slice";

const rootReducer = combineReducers({
  chats: chatReducer,
});

export default rootReducer;