import { MessageObj } from "@/tables/storm/chat/message/main";
import { StormPartnerChatMessage } from "./them/main";
import { StormYouChatMessage } from "./you/main";

export function StormMessage({ message }: { message: MessageObj }) {
  return (
    <>
      {message.source === "You" ? (
        <StormYouChatMessage>{message.message}</StormYouChatMessage>
      ) : (
        <StormPartnerChatMessage>{message.message}</StormPartnerChatMessage>
      )}
    </>
  );
}
