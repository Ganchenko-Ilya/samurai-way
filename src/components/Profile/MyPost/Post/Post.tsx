import React from "react";
import s from "./Post.module.css";


export type PostType = {
  message:string 
  id: string 
  likeCounter: number

}

export const Post = (props:PostType) => {
  return (
    
      
      <div className={s.item} key={props.id}>
        <img src="https://i.pinimg.com/originals/bf/89/2e/bf892e298fdfaa1c750b687eb25a0ec6.jpg" alt="avatar" />
        {props.message}
        <div>
          <span>like {props.likeCounter}</span>
        </div>
      </div> 
    
  );
};
