"use client";
import { useState } from "react";
import { StormView } from "./view";
import { StormMessageObj } from "./model/point/chat/message/main";
import { stormModel } from "./model/main";

export default function Page() {
  const [messages, changeMessages] = useState<StormMessageObj[]>(
    stormModel.points.point.chats.chat.messages.example
  );

  const sendMessage = (message: string) => {
    changeMessages((prev) => [
      ...prev,
      stormModel.points.point.chats.chat.messages.message.example,
    ]);
    changeMessages((prev) => [
      ...prev,
      stormModel.points.point.chats.chat.messages.message.example,
    ]);
    alert(`Sent Message ${message}`);
  };

  return (
      <StormView messages={messages} sendMessage={sendMessage} />
  );
}
