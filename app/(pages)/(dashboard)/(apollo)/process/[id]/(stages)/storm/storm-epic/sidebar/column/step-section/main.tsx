import { ProcessStepObj } from "@/(pages)/(dashboard)/(apollo)/process/[id]/model/process/step/main";
import { StormSidePanelSectionAdd } from "./add/main";
import { StormSidePanelChat } from "./chat/main";
import { StormSidePanelSectionHeader } from "./header/main";
import StormSidePanelSectionToggle from "./header/toggle/main";
import { StormSidePanelSectionTitle } from "./title/main";
import { useState } from "react";
import { stormModel } from "../../../../model/main";

interface StormSidePanelSectionViewProps {
  step: ProcessStepObj;
}

export function StormSidePanelStepSection({
  step,
}: StormSidePanelSectionViewProps) {
  const [show, changeShow] = useState(false);
  const [chats, changeChats] = useState(step.points.stormPoint.chats)
  const addChat = () => changeChats(prev => [...prev, stormModel.points.point.chats.chat.example])

  return (
    <div className="flex flex-col space-y-[2rem]">
      <StormSidePanelSectionHeader>
        <StormSidePanelSectionTitle>{step.name} ({chats.length})</StormSidePanelSectionTitle>
        <StormSidePanelSectionToggle
          show={show}
          toggleShow={() => changeShow(!show)}
        />
      </StormSidePanelSectionHeader>
      {show && (
        <>
          {chats.map((chat) => (
            <>
              <StormSidePanelChat>{chat.title}</StormSidePanelChat>
            </>
          ))}
          <StormSidePanelSectionAdd onClick={addChat}
          />
        </>
      )}
    </div>
  );
}
