import React from "react";
import s from "./MyPost.module.css";
import { Post } from "./Post/Post";

export const MyPost = () => {
  return (
    <div>
      My post
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message='Yo'/>
        <Post message='How are you?' />
         
      </div>
    </div>
  );
};
