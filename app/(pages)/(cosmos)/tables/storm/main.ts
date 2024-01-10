import { exampleChats } from "./chat/main";

export interface StormObj {
  id: string;
  chatIds: string[];
}

export const exampleStorm: StormObj = {
  id: "0",
  chatIds: exampleChats.map((chat) => chat.id),
};

export const exampleStorms: StormObj[] = [
  {
    id: "0",
    chatIds: exampleChats.map((chat) => chat.id),
  },
  {
    id: "1",
    chatIds: exampleChats.map((chat) => chat.id),
  },
];
