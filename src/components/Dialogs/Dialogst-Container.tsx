import {
  ActionDialogsType,
  addMessageAC,
  changeTextMessageAC,
  dialogsMessageType,
  dialogsNameType,
} from "../../redax/dialogs-reducer";
import { reducerType } from "../../redax/store-redux";

import { Dialogs } from "./Dialogs";

import { connect } from "react-redux";

type stateMapType = {
  dialogsMessage: dialogsMessageType[];
  dialogsName: dialogsNameType[];
  newTextMessage: string;
};
type dispatchMapType = {
  addMessage: () => void;
  onChangeAction: (value: string) => void;
};
export type DialogsPropsType = stateMapType & dispatchMapType;
const stateMap = (state: reducerType): stateMapType => {
  const newState = state.dialogsPage;
  return {
    dialogsMessage: newState.dialogsMessage,
    dialogsName: newState.dialogsName,
    newTextMessage: newState.newTextMessage,
  };
};
const dispatchMap = (
  dispatch: (action: ActionDialogsType) => void
): dispatchMapType => {
  return {
    addMessage: () => dispatch(addMessageAC()),
    onChangeAction: (value: string) => dispatch(changeTextMessageAC(value)),
  };
};

export const DialogsContainer = connect(stateMap, dispatchMap)(Dialogs);
