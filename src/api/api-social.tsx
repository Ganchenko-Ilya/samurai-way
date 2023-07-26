import axios from "axios";
import { FormDataType } from "../components/Login/Login";

export type StatusFollowingType = "loading" | "idle";
type PhotoType = {
  small: null;
  large: null;
};
export type ItemType = {
  name: string;
  id: number;
  uniqueUrlName: null;
  photos: PhotoType;
  status: null;
  followed: boolean;
};
export const ProfileApi = {
  aboutMe: "я круто чувак 1001%",
  contacts: {
    facebook: "facebook.com",
    website: null,
    vk: "vk.com/dimych",
    twitter: "https://twitter.com/@sdf",
    instagram: "instagra.com/sds",
    youtube: null,
    github: "github.com",
    mainLink: null,
  },
  lookingForAJob: true,
  lookingForAJobDescription: "не ищу, а дурачусь",
  fullName: "samurai dimych",
  userId: 2,
  photos: {
    small:
      "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
    large:
      "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0",
  },
};
export type ProfileApiType = typeof ProfileApi;

export type AxiosUsersType = {
  items: ItemType[];
  totalCount: number;
  error: null;
};
export type ResponseType<T = {}> = {
  data: T;

  messages: string[];
  fieldsErrors: string[];
  resultCode: number;
};
export type AuthDataType = {
  id: number;
  login: string;
  email: string;
};

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
});

export const profileApi = {
  getProfile(id: string) {
    return instance.get<ProfileApiType>("profile/" + id);
  },
  getProfileStatus(userId: string) {
    return instance.get(`profile/status/${userId}`);
  },
  changeProfileStatus(status: string) {
    return instance.put<ResponseType>("profile/status", { status });
  },
};

export const userApi = {
  getUsers(page: number, count: number) {
    return instance.get<AxiosUsersType>(`users?page=${page}&count=${count}}`);
  },
  followUser(id: string) {
    return instance.post<ResponseType>(`follow/${id}`);
  },
  unFollowUser(id: string) {
    return instance.delete<ResponseType>(`follow/${id}`);
  },
};

export const authApi = {
  authAccaunt() {
    return instance.get<ResponseType<AuthDataType>>("auth/me");
  },
  authLogIn(formData: FormDataType) {
    return instance.post<ResponseType<{ userId: number }>>(
      "auth/login",
      formData
    );
  },
  authLogOut() {
    return instance.delete<ResponseType>("auth/login");
  },
};
