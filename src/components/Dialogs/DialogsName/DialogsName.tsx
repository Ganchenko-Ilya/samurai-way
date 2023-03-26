import React from "react";
import { NavLink } from "react-router-dom";

import s from "./DialogsName.module.css";

type DialogsName = {
  name: string;
  id:string;
};
export const DialogsName = (props: DialogsName) => {
  return <div key={props.id}className={s.item  }>
    <NavLink to={'/Dialogs/'  +  props.id}>{props.name}</NavLink></div>;
};
