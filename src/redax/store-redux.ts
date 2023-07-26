import { combineReducers, createStore, applyMiddleware } from "redux";
import { ActionPostType, postReducer } from "./profile-reducer";
import { ActionDialogsType, dialogsReducer } from "./dialogs-reducer";
import { ActionUsersType, userReducer } from "./users-reducer";
import { ActionAuthType, authReducer } from "./auth-reducer";
import thunk, { ThunkDispatch, ThunkAction } from "redux-thunk";
import { ActionAppType, appReducer } from "./appReducer";
import { reducer as formReducer } from "redux-form";

const rootRedusers = combineReducers({
  postPage: postReducer,
  dialogsPage: dialogsReducer,
  usersPage: userReducer,
  authReducer: authReducer,
  appReducer: appReducer,
  form: formReducer,
});
export const store = createStore(rootRedusers, applyMiddleware(thunk));

export type storeReduxType = typeof store;
export type reducerType = ReturnType<typeof rootRedusers>;

/////////THUNK TYPE
export type AppAction =
  | ActionUsersType
  | ActionDialogsType
  | ActionPostType
  | ActionAuthType
  | ActionAppType;
export type thunkDispatch = ThunkDispatch<reducerType, any, AppAction>;
export type thunkAction = ThunkAction<void, reducerType, unknown, AppAction>;
///////////
