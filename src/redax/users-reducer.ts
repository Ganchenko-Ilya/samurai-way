import {
  AxiosUsersType,
  ItemType,
  StatusFollowingType,
  
  userApi,
} from "../api/api-social";
import { thunkAction } from "./store-redux";

export type StateUserType = initialAxiosUsersType & {
  pageSize: number;
  pageFocus: number;
  isLoading: boolean;
};
export type initialItemType = Array<
  ItemType & { statusFollowingUser: StatusFollowingType }
>;

export type initialAxiosUsersType = Omit<AxiosUsersType, "items"> & {
  items: initialItemType;
};

const initialState: StateUserType & {} = {
  error: null,
  items: [],
  totalCount: 0,
  pageSize: 5,
  pageFocus: 1,
  isLoading: false,
};

type changeFollowUserACType = ReturnType<typeof changeFollowUsers>;
type setUserACType = ReturnType<typeof setUsers>;
type pageChangeACType = ReturnType<typeof pageChange>;
type changeLoadingStatusACType = ReturnType<typeof changeLoadingStatus>;
type userStatusFollowACType = ReturnType<typeof userStatusFollow>;

export type ActionUsersType =
  | changeFollowUserACType
  | setUserACType
  | pageChangeACType
  | changeLoadingStatusACType
  | userStatusFollowACType;

export const userReducer = (
  state: StateUserType = initialState,
  action: ActionUsersType
): StateUserType => {
  switch (action.type) {
    case "CHANGE-FOLLOW-USER": {
      return {
        ...state,
        items: state.items.map((el) =>
          el.id.toString() === action.id
            ? { ...el, followed: !el.followed }
            : el
        ),
      };
    }
    case "SET-USER": {
      return {
        ...state,
        ...action.data,
        items: action.data.items.map((el) => ({
          ...el,
          statusFollowingUser: "idle",
        })),
      };
    }
    case "PAGE-CHANGE": {
      return { ...state, pageFocus: action.page };
    }
    case "LOADING-CHANGE": {
      return { ...state, isLoading: action.loading };
    }
    case "CHANGE-STATUS-FOLLOW": {
      return {
        ...state,
        items: state.items.map((el) =>
          el.id.toString() === action.id
            ? { ...el, statusFollowingUser: action.status }
            : el
        ),
      };
    }

    default:
      return state;
  }
};

export const changeFollowUsers = (id: string) =>
  ({ type: "CHANGE-FOLLOW-USER", id } as const);

export const setUsers = (data: AxiosUsersType) =>
  ({ type: "SET-USER", data } as const);
export const pageChange = (page: number) =>
  ({ type: "PAGE-CHANGE", page } as const);

export const changeLoadingStatus = (loading: boolean) =>
  ({ type: "LOADING-CHANGE", loading } as const);

export const userStatusFollow = (id: string, status: StatusFollowingType) =>
  ({ type: "CHANGE-STATUS-FOLLOW", id, status } as const);

//////////////////THUNKS
export const setUserTC =
  (pageFocus: number, pageSize: number): thunkAction =>
  async (dispatch) => {
    dispatch(changeLoadingStatus(true));
    const data = await userApi.getUsers(pageFocus, pageSize);

    setTimeout(() => {
      dispatch(pageChange(pageFocus));
      dispatch(changeLoadingStatus(false));
      dispatch(setUsers(data.data));
    }, 500);
  };

export const changeFollowUsersTC =
  (id: string): thunkAction =>
  async (dispatch, getState) => {
    const user = getState().usersPage.items.find(
      (el) => el.id.toString() === id
    );
    if (user) {
      dispatch(userStatusFollow(id, "loading"));
      if (user.followed) {
        await userApi.unFollowUser(id);
      } else {
        await userApi.followUser(id);
      }
      setTimeout(() => {
        dispatch(changeFollowUsers(id));
        dispatch(userStatusFollow(id, "idle"));
      }, 500);
    }
  };

// ////////////////////////////////
