import { ProcessStepObj } from "@/(pages)/(dashboard)/(apollo)/process/[id]/model/process/step/main";
import { StormSidePanelSectionAdd } from "./add/main";
import { StormSidePanelChat } from "./chat/main";
import { StormSidePanelSectionHeader } from "./header/main";
import StormSidePanelSectionIndicator from "./header/toggle/main";
import { StormSidePanelSectionTitle } from "./title/main";
import { useEffect, useState } from "react";
import { StormChatObj } from "../../../../model/point/chat/main";
import { stormModel } from "../../../../model/main";

interface StormSidePanelSectionViewProps {
  chats: StormChatObj[];
  chatId: string;
  step: ProcessStepObj;
  active: boolean;
  addChat: (chat: StormChatObj, step: ProcessStepObj) => void;
  selectChat: (chat: StormChatObj, step: ProcessStepObj) => void;
}

export function StormSidePanelStepSection({
  step,
  chats,
  chatId,
  active,
  addChat,
  selectChat,
}: StormSidePanelSectionViewProps) {
  const [show, changeShow] = useState(active);

  useEffect(() => {
    if (active) {
      changeShow(true);
    }
  }, [active]);

  return (
    <div className="flex flex-col space-y-[2rem]">
      <div
        className="cursor-pointer"
        onClick={() => {
          changeShow(!show);
        }}
      >
        <StormSidePanelSectionHeader>
          <StormSidePanelSectionTitle>
            {step.name} {(show) && `(${chats.length})`}
          </StormSidePanelSectionTitle>
          <StormSidePanelSectionIndicator show={active} />
        </StormSidePanelSectionHeader>
      </div>
      {show && (
        <>
          {chats.map((chat) => (
            <>
              <StormSidePanelChat
                active={active && chat.id === chatId}
                onClick={() => selectChat(chat, step)}
              >
                {chat.title}
              </StormSidePanelChat>
            </>
          ))}
          <StormSidePanelSectionAdd
            onClick={() => addChat({
              ...stormModel.points.point.chats.chat.example, id: new Date().toISOString()}, step)}
          />
        </>
      )}
    </div>
  );
}
