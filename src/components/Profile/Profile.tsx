import React from "react";
import s from "./Profile.module.css";
import { MyPost } from "./MyPost/MyPost";
import { ProfileDescription } from "./ProfileDescription/ProfileDescription";
import { postType } from "../../redax/state";

type ProfilePropsType ={ 
  post:{posts:postType[]};
}

export const Profile = (props:ProfilePropsType) => {
  return (
    <div >
      <ProfileDescription/>
      <MyPost  post={props.post.posts}/>
    </div>
  );
};
