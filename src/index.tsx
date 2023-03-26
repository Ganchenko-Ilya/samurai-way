import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { state } from './redax/state';
import { BrowserRouter } from 'react-router-dom';

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
//   message: string;
//   id:string
// };

// const post: postType[] = [
//   { id: "1", message: "Yo", likeCounter: 4 },
//   { id: "2", message: "How are you?", likeCounter: 10 },
// ];
// const dialogsName: dialogsNameType[] = [
//   { id: "1", name: "Ilya" },
//   { id: "2", name: "Zhanna" },
//   { id: "3", name: "Anton" },
//   { id: "4", name: "Arsenyi" },
//   { id: "5", name: "Sergey" },
// ];
// const dialogsMessage: dialogsMessageType[] = [
//   { id: "1", message: "Yo,Do you want water?" },
//   { id: "2", message: "I understand tou" },
//   { id: "3", message: "I am fine thank you" },
//   { id: "4", message: "Hello" },
//   { id: "5", message: "Help me" },
// ];




ReactDOM.render(
  <BrowserRouter><App state={state}/></BrowserRouter>
    ,
  document.getElementById('root')
);