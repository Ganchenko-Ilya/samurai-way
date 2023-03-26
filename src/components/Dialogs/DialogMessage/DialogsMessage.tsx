import React from "react";

import s from "./DialogsMessage.module.css";

type DialogsMessage = {
  message: string; 
  id:string
};
export const DialogsMessage = (props: DialogsMessage) => {
  return <div key={props.id} className={s.item}>{props.message}</div>;
};
