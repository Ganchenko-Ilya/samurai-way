import { ChangeEvent, KeyboardEvent } from "react";
import {
  
  
} from "../../redax/state";

import { DialogsMessage } from "./DialogMessage/DialogsMessage";
import s from "./Dialogs.module.css";

import { DialogsName } from "./DialogsName/DialogsName";
import { dialogsMessageType, dialogsNameType } from "../../redax/dialogs-reducer";
import { DialogsPropsType } from "./Dialogst-Container";




export const Dialogs = (props: DialogsPropsType) => {
  const dialogsMessageMap = props.dialogsMessage.map((el) => (
    <DialogsMessage key={el.id} message={el.message} id={el.id} />
  ));

  const dialogsNameMap = props.dialogsName.map((el) => (
    <DialogsName key={el.id} id={el.id} name={el.name} />
  ));
  const onChangeHanlder = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.currentTarget.value
    props.onChangeAction(value)
  };
  const onClickHandler = () => {
    props.addMessage()
  };

  const onKeyDownHanlder = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      props.addMessage()
    }
  };

  return (
    <div className={s.dialogsWrapper}>
      <div>{dialogsNameMap}</div>

      <div>
        <div>{dialogsMessageMap}</div>
        <textarea
          value={props.newTextMessage}
          onChange={onChangeHanlder}
          onKeyDown={onKeyDownHanlder}
        ></textarea>
        <div>
          <button onClick={onClickHandler}>Add message</button>
        </div>
      </div>
    </div>
  );
};
