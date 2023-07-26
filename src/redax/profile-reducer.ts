import { v1 } from "uuid";
import { ProfileApiType, profileApi } from "../api/api-social";
import { thunkAction } from "./store-redux";
import { changeLoadingStatus } from "./users-reducer";

export type postType = {
  message: string;
  id: string;
  likeCounter: number;
};
export type postPage1 = {
  posts: postType[];
  newPostText: string;
};

export type addPostACType = ReturnType<typeof addPostAC>;
export type changeTextACType = ReturnType<typeof changeTextAC>;
export type setProfileType = ReturnType<typeof setProfile>;
export type getProfileStatusType = ReturnType<typeof getProfileStatus>;
export type changeMeProfileStatusType = ReturnType<
  typeof changeMeProfileStatus
>;

export type postPage = typeof initialState;
export type AddPostPageType = Omit<postPage, "profile"> & {
  profile: ProfileApiType | null;
};
export type postReducerType = ReturnType<typeof postReducer>;

const initialState = {
  posts: [
    { id: "1", message: "Yo", likeCounter: 4 },
    { id: "2", message: "How are you?", likeCounter: 10 },
  ],
  newPostText: "",
  profile: null,
  profileStatus: "",
};
export type returnPostReducer = ReturnType<typeof postReducer>;
export type ActionPostType =
  | addPostACType
  | changeTextACType
  | setProfileType
  | getProfileStatusType
  | changeMeProfileStatusType;
export const postReducer = (
  state: AddPostPageType = initialState,
  action: ActionPostType
): AddPostPageType => {
  switch (action.type) {
    case "ADD-POST": {
      const newPost: postType = {
        id: v1(),
        message: state.newPostText,
        likeCounter: 0,
      };

      state.newPostText = "";
      return { ...state, posts: [...state.posts, newPost] };
    }

    case "CHANGE-TEXT": {
      return { ...state, newPostText: action.payload.text };
    }
    case "SET-PROFILE": {
      return { ...state, profile: action.profile };
    }
    case "SET-PROFILE-STATUS": {
      return { ...state, profileStatus: action.status };
    }

    default:
      return state;
  }
};

export const addPostAC = () => ({ type: "ADD-POST" } as const);
export const changeTextAC = (text: string) =>
  ({ type: "CHANGE-TEXT", payload: { text } } as const);
export const setProfile = (profile: ProfileApiType | null) =>
  ({ type: "SET-PROFILE", profile } as const);
export const getProfileStatus = (status: string) =>
  ({ type: "SET-PROFILE-STATUS", status } as const);
export const changeMeProfileStatus = (newStatus: string) =>
  ({ type: "CHANGE-ME-PROFILE-STATUS", newStatus } as const);

export const getProfileTC =
  (id: string): thunkAction =>
  async (dispatch) => {
    dispatch(changeLoadingStatus(true));
    const res = await profileApi.getProfile(id);
    setTimeout(() => {
      dispatch(changeLoadingStatus(false));
      dispatch(setProfile(res.data));
    }, 500);
  };

export const getProfileStatusTC =
  (id: string): thunkAction =>
  async (dispatch) => {
    const res = await profileApi.getProfileStatus(id);

    dispatch(getProfileStatus(res.data));
  };

export const changeProfileStatusTC =
  (status: string): thunkAction =>
  async (dispatch, getState) => {
    const id = getState().authReducer.id?.toString() as string;

    const res = await profileApi.changeProfileStatus(status);
    console.log(res.data);

    dispatch(getProfileStatusTC(id));
  };
