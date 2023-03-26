export type postType = {
  message: string;
  id: string;
  likeCounter: number;
};
export type dialogsNameType = {
  id: string;
  name: string;
};
export type dialogsMessageType = {
  id: string;
  message: string;
};

export type stateType = {
  postPage: { posts: postType[] };
  dialogsPage: {
    dialogsName: dialogsNameType[];
    dialogsMessage: dialogsMessageType[];
  };
};

export const state: stateType = {
  postPage: {
    posts: [
      { id: "1", message: "Yo", likeCounter: 4 },
      { id: "2", message: "How are you?", likeCounter: 10 },
    ],
  },
  dialogsPage: {
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
  },
};
