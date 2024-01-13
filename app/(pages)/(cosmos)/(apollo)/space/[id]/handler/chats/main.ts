import { ChatObj } from "@/tables/storm/chat/main";
import { MessageObj } from "@/tables/storm/chat/message/main";
import { chatTable, stormTable } from "@/tables/storm/table";
import { useState } from "react";

export interface ChatHandler {
  updateChats: (chats: ChatObj[]) => ChatObj[];
  updateChat: (chat: ChatObj) => ChatObj;
  selectChat: (chat: ChatObj) => ChatObj;
  addChat: (chat: ChatObj) => ChatObj;
  sendMessage: (message: string) => MessageObj;
}

export interface useChatInterface {
  chat: ChatObj | undefined;
  chats: ChatObj[];
  chatId: string;
  messages: MessageObj[];
  _chatHandler: ChatHandler;
}

export const useChat = (): useChatInterface => {
  const [chats, changeChats] = useState<ChatObj[]>(chatTable.examples);
  const [chatId, changeChatId] = useState<string>(chats?.at(0)?.id || "");
  const [messages, changeMessages] = useState<MessageObj[]>(
    chats?.at(0)?.messages || []
  );

  const chat = chats.filter((chat) => chat.id === chatId).at(0);

  const _chatHandler: ChatHandler = {
    updateChats: (chats: ChatObj[]) => {
      changeChats(chats)
      changeChatId(chats.at(0)?.id || "")
      const chat = chats
        .filter((chat) => chat.id === chatId)
        .at(0);
      changeMessages(chat?.messages || [])
      return chats;
    },
    updateChat: (chat: ChatObj) => {
      changeChatId(chat.id);
      changeMessages(chat.messages);
      return chat;
    },
    selectChat: (chat: ChatObj) => {
      changeChatId(chat.id);
      changeMessages(chat.messages);
      return chat;
    },
    addChat: (chat: ChatObj) => {
      changeChats((prev) => [...prev, chat]);
      changeChatId(chat.id);
      changeMessages(chat.messages);
      return chat;
    },
    sendMessage: (text: string) => {
      const sentMessage: MessageObj = {
        id: crypto.randomUUID(),
        source: "gpt-4",
        time: new Date("2023-12-19").toISOString(),
        message: text,
      };
      const replyMessage: MessageObj = {
        id: crypto.randomUUID(),
        source: "gpt-4",
        time: new Date("2023-12-19").toISOString(),
        message: "Hello Back",
      };

      changeMessages((prev) => [...prev, sentMessage]);
      changeMessages((prev) => [...prev, replyMessage]);
      return sentMessage;
    },
  };

  return {
    chat,
    chats,
    chatId,
    messages,
    _chatHandler,
  };
};
