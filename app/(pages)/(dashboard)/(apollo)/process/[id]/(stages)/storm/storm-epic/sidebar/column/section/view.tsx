import { ProcessStepObj } from "@/(pages)/(dashboard)/(apollo)/process/[id]/model/process/step/main";
import { StormSidePanelSectionAdd } from "./add/main";
import { StormSidePanelChat } from "./chat/main";
import { StormSidePanelSectionHeader } from "./header/main";
import StormSidePanelSectionToggle from "./header/toggle/main";
import { StormSidePanelSectionTitle } from "./title/main";
import { useState } from "react";

interface StormSidePanelSectionViewProps {
  step: ProcessStepObj;
}

export function StormSidePanelSectionView({
  step,
}: StormSidePanelSectionViewProps) {
  const [show, changeShow] = useState(true);

  return (
    <div className="flex flex-col space-y-[2rem]">
      <StormSidePanelSectionHeader>
        <StormSidePanelSectionTitle>{step.name}</StormSidePanelSectionTitle>
        <StormSidePanelSectionToggle
          show={show}
          toggleShow={() => changeShow(!show)}
        />
      </StormSidePanelSectionHeader>
      {show && (
        <>
          {step.points.stormPoint.chats.map((chat) => (
            <>
              <StormSidePanelChat>{chat.title}</StormSidePanelChat>
            </>
          ))}
          <StormSidePanelSectionAdd />
        </>
      )}
    </div>
  );
}
