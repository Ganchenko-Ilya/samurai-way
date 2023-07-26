import { ChangeEvent } from "react";

import s from "./MyPost.module.css";
import { Post } from "./Post/Post";
import { postType } from "../../../redax/profile-reducer";
import { MyPostPropsType } from "./MyPost-Conteiner";

export const MyPost = (props: MyPostPropsType) => {
  const buttonHandler = () => {
    props.addPost();
  };
  const onChangeHanlder = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.currentTarget.value;

    props.onChangeTextPost(value);
  };
  const postMap = props.post.map((el) => (
    <Post id={el.id} message={el.message} likeCounter={el.likeCounter} />
  ));
  return (
    <div className={s.blokPost}>
      My post
      <div>
        <div>
          <textarea
            value={props.newPostText}
            onChange={onChangeHanlder}
          ></textarea>
        </div>

        <button onClick={buttonHandler}>Add post</button>
      </div>
      <div className={s.posts}>{postMap}</div>
    </div>
  );
};
