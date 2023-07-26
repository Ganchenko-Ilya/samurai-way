

export type changeTextMessageACType = ReturnType<typeof changeTextMessageAC>;

export type addMessageACType = ReturnType<typeof addMessageAC>;
export type dialogsNameType = {
  id: string;
  name: string;
};
export type dialogsMessageType = {
  id: string;
  message: string;
};
export type dialogsPageType = {
  dialogsName: dialogsNameType[];
  dialogsMessage: dialogsMessageType[];
  newTextMessage: string;
};

const initialState: dialogsPageType = {
  dialogsName: [
    { id: "1", name: "Ilya" },
    { id: "2", name: "Zhanna" },
    { id: "3", name: "Anton" },
    { id: "4", name: "Arsenyi" },
    { id: "5", name: "Sergey" },
  ],
  dialogsMessage: [
    { id: "1", message: "Yo,Do you want water?" },
    { id: "2", message: "I understand tou" },
    { id: "3", message: "I am fine thank you" },
    { id: "4", message: "Hello" },
    { id: "5", message: "Help me" },
  ],
  newTextMessage: "",
};

export type ActionDialogsType =addMessageACType |   changeTextMessageACType
export const dialogsReducer = (
  state: dialogsPageType = initialState,
  action: ActionDialogsType
) => {
  switch (action.type) {
    case "CHANGE-TEXT-MESSAGE": {
      return { ...state, newTextMessage: action.payload.text };
    }

    case "ADD-MESSAGE": {
      const newMessageObj: dialogsMessageType = {
        id: "6",
        message: state.newTextMessage,
      };

      const newState = {...state};
      newState.newTextMessage = '';
      newState.dialogsMessage.push(newMessageObj)


      return newState;
    }
    default:
      return state;
  }
};

export const changeTextMessageAC = (text: string) =>
  ({ type: "CHANGE-TEXT-MESSAGE", payload: { text } } as const);

export const addMessageAC = () => ({ type: "ADD-MESSAGE" } as const);
