import React from "react";
import s from "./ProfileDescription.module.css";

export const ProfileDescription = () => {
  return (
    <div className={s.content}>
      <div className={s.image}>
        <img
          src="https://i.pinimg.com/originals/45/94/2c/45942ccb43b3159a09f34a7c2755e67d.jpg"
          alt=""
        />
      </div>
      <div className={s.description}>ava + description</div>
    </div>
  );
};
