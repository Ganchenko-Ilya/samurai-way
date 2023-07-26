import { authApi, profileApi } from "../api/api-social";
import { FormDataType } from "../components/Login/Login";
import { appLoader } from "./appReducer";
import { setProfile } from "./profile-reducer";
import { thunkAction } from "./store-redux";

export type SetAuthStateACType = ReturnType<typeof setAuthState>;
export type AuthLoginOutACType = ReturnType<typeof authLoginOut>;

export type authStateType = {
  id: number | null;
  login: string;
  email: string;
  authLogin: boolean;
};

const initialState = {
  id: null,
  login: "",
  email: "",
  authLogin: false,
};

export type ActionAuthType = SetAuthStateACType | AuthLoginOutACType;

export const authReducer = (
  state: authStateType = initialState,
  action: ActionAuthType
): authStateType => {
  switch (action.type) {
    case "SET-AUTH-STATE": {
      return { ...state, ...action.payload, authLogin: true };
    }
    case "OUT-AUTH-STATE": {
      return { ...state, authLogin: false };
    }

    default:
      return state;
  }
};

export const setAuthState = (id: number, email: string, login: string) =>
  ({ type: "SET-AUTH-STATE", payload: { id, email, login } } as const);
export const authLoginOut = () => ({ type: "OUT-AUTH-STATE" } as const);

export const authStateTC = (): thunkAction => async (dispatch) => {
  const res = await authApi.authAccaunt();

  if (res.data.resultCode === 0) {
    const { id, email, login } = res.data.data;

    dispatch(setAuthState(id, email, login));

    const data = await profileApi.getProfile(id.toString());
    dispatch(setProfile(data.data));
  }
  dispatch(appLoader(true));
};

export const authLogInTC =
  (formData: FormDataType): thunkAction =>
  async (dispatch) => {
    const res = await authApi.authLogIn(formData);
    if (res.data.resultCode === 0) {
      dispatch(authStateTC());
    }
  };
export const authLoginOutTC = (): thunkAction => async (dispatch) => {
  const res = await authApi.authLogOut();
  if (res.data.resultCode === 0) {
    dispatch(authLoginOut());
  }
};
