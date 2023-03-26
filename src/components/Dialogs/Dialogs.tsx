import React from "react";
import { dialogsMessageType, dialogsNameType } from "../../redax/state";

import { DialogsMessage } from "./DialogMessage/DialogsMessage";
import s from "./Dialogs.module.css";

import { DialogsName } from "./DialogsName/DialogsName";

type DialogsPropsType = {
  dialogs: {
    dialogsName: dialogsNameType[];
    dialogsMessage: dialogsMessageType[];
  };
};

export const Dialogs = (props: DialogsPropsType) => {
  const dialogsMessageMap = props.dialogs.dialogsMessage.map((el) => (
    <DialogsMessage message={el.message} id={el.id} />
  ));

  const dialogsNameMap = props.dialogs.dialogsName.map((el) => (
    <DialogsName id={el.id} name={el.name} />
  ));

  return (
    <div className={s.dialogsWrapper}>
      <div>{dialogsNameMap}</div>

      <div>{dialogsMessageMap}</div>
    </div>
  );
};
