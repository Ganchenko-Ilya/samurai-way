import { v1 } from "uuid";
import { addPostACType, changeTextACType, postReducer } from "./profile-reducer";
import {
  addMessageACType,
  changeTextMessageACType,
  dialogsReducer,
} from "./dialogs-reducer";

// export type postType = {
//   message: string;
//   id: string;
//   likeCounter: number;
// };
// export type dialogsNameType = {
//   id: string;
//   name: string;
// };
// export type dialogsMessageType = {
//   id: string;
//   message: string;
// };
// export type postPage = {
//   posts: postType[];
//   newPostText: string;
// };

// export type dialogsPageType = {
//   dialogsName: dialogsNameType[];
//   dialogsMessage: dialogsMessageType[];
//   newTextMessage: string;
// };

// export type stateType = {
//   postPage: postPage;

//   dialogsPage: dialogsPageType;
// };

// export type ActionType =
//   | changeTextACType
//   | addPostACType
//   | changeTextMessageACType
//   | addMessageACType;

// export type storeType = {
//   _state: stateType;
//   _rerenderEntireTree: (state: stateType) => void;

//   // addPost: () => void;
//   // changeText: (value: string) => void;
//   subscribe: (observer: (state: stateType) => void) => void;
//   getState: () => stateType;
//   dispatch: (action: ActionType) => void;
// };

// export const store: storeType = {
//   _rerenderEntireTree(state: stateType) {},
//   _state: {
//     postPage: {
//       posts: [
//         { id: "1", message: "Yo", likeCounter: 4 },
//         { id: "2", message: "How are you?", likeCounter: 10 },
//       ],
//       newPostText: "",
//     },

//     dialogsPage: {
//       dialogsName: [
//         { id: "1", name: "Ilya" },
//         { id: "2", name: "Zhanna" },
//         { id: "3", name: "Anton" },
//         { id: "4", name: "Arsenyi" },
//         { id: "5", name: "Sergey" },
//       ],
//       dialogsMessage: [
//         { id: "1", message: "Yo,Do you want water?" },
//         { id: "2", message: "I understand tou" },
//         { id: "3", message: "I am fine thank you" },
//         { id: "4", message: "Hello" },
//         { id: "5", message: "Help me" },
//       ],
//       newTextMessage: "",
//     },
//   },

//   subscribe(observer: (state: stateType) => void) {
//     this._rerenderEntireTree = observer;
//   },

//   get getState() {
//     return () => this._state;
//   },
//   dispatch(action: ActionType) {
//     this._state.postPage = postReducer(this._state.postPage, action);
//     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

//     this._rerenderEntireTree(this._state);
//   },
// };
