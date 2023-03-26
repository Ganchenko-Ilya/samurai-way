import React from "react";
import s from "./Profile.module.css";
import { MyPost } from "./MyPost/MyPost";

export const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img
          src="https://i.pinimg.com/originals/45/94/2c/45942ccb43b3159a09f34a7c2755e67d.jpg"
          alt=""
        />
      </div>
      <div>ava + description</div>
      <MyPost />
    </div>
  );
};
