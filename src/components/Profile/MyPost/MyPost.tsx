import React from "react";
import { postType } from "../../../redax/state";

import s from "./MyPost.module.css";
import { Post, PostType } from "./Post/Post";

type MyPostPropsType = {
  post: postType[];
}
export const MyPost = (props:MyPostPropsType) => {
  
  const postMap = props.post.map((el) => <Post id={el.id} message={el.message} likeCounter={el.likeCounter} />);
  return (
    <div className={s.blokPost}>
      My post
      <div>
        <div>
          <textarea></textarea>
        </div>

        <button>Add post</button>
      </div>
      <div className={s.posts}>{postMap}</div>
    </div>
  );
};
