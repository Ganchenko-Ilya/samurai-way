import React from "react";
import s from "./Post.module.css";


type PostType = {
  message:string

}

export const Post = (props:PostType) => {
  return (
    <div>
      
      <div className={s.item}>
        <img src="https://i.pinimg.com/originals/bf/89/2e/bf892e298fdfaa1c750b687eb25a0ec6.jpg" alt="avatar" />
        {props.message}
        <div>
          <span>like</span>
        </div>
      </div> 
    </div>
  );
};
