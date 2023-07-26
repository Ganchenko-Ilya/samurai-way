import {
  ActionPostType,
  addPostAC,
  changeTextAC,
  postType,
} from "../../../redax/profile-reducer";
import { MyPost } from "./MyPost";
import { reducerType } from "../../../redax/store-redux";
import { connect } from "react-redux";



  
type stateMapType = {
  post: postType[];

  newPostText: string;

}
type dispatchMapType = {
  onChangeTextPost: (value: string) => void;
  addPost: () => void;
}
export type MyPostPropsType = stateMapType & dispatchMapType 
const stateMap = (state: reducerType):stateMapType => {
  const newState = state.postPage;
  return {
    post: newState.posts,
    newPostText: newState.newPostText,
  };
};

const dispatchMap = (dispatch: (action: ActionPostType) => void):dispatchMapType => {
  return {
    addPost: () => dispatch(addPostAC()),
    onChangeTextPost: (value: string) => dispatch(changeTextAC(value)),
  };
};

export const MyPostContainer = connect(stateMap, dispatchMap)(MyPost);
