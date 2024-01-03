import { StormSidePanelSectionAdd } from "./add/main";
import { StormSidePanelChat } from "./chat/main";
import { StormSidePanelSectionHeader } from "./header/main";
import StormSidePanelSectionToggle from "./header/toggle/main";
import { StormSidePanelSectionTitle } from "./title/main";
import { useState } from "react";
import { ProcessContextObj } from "@/(pages)/(dashboard)/(apollo)/process/[id]/model/process/context/main";
import { stormModel } from "../../../../model/main";

interface StormSidePanelGeneralSectionViewProps {
  context: ProcessContextObj;
}

export function StormSidePanelGeneralSection({
  context,
}: StormSidePanelGeneralSectionViewProps) {
  const [show, changeShow] = useState(true);
  const [chats, changeChats] = useState(context.stormContext.chats)
  const addChat = () => changeChats(prev => [...prev, stormModel.context.chats.chat.example])

  return (
    <div className="flex flex-col space-y-[2rem]">
      <StormSidePanelSectionHeader>
        <StormSidePanelSectionTitle>General ({chats.length})</StormSidePanelSectionTitle>
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
          <StormSidePanelSectionAdd onClick={addChat}/>
        </>
      )}
    </div>
  );
}

