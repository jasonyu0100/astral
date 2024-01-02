"use client";

import { DraftController } from "./draft-epic/main";
import { DraftSidebarHeader } from "./draft-epic/sidebar/header/main";
import { DraftControllerCenterSection } from "./draft-epic/center/main";
import { DraftStep } from "./draft-epic/bottom/steps/step/main";
import { DraftControllerSteps } from "./draft-epic/bottom/steps/main";
import { DraftSidebar } from "./draft-epic/sidebar/main";
import { DraftControllerBottomRow } from "./draft-epic/bottom/main";
import { DraftCraftElement } from "./draft-epic/sidebar/elements/element/main";
import { DraftStepsAdd } from "./draft-epic/bottom/add/main";
import { DraftConstellationSection } from "./draft-epic/center/constellation/main";
import { ConstellationLinks } from "./draft-epic/center/constellation/stars/links/main";
import { ConstellationStar } from "./draft-epic/center/constellation/stars/star/main";
import { useRef } from "react";
import { motion } from "framer-motion";
import { TopRowAddButton } from "./draft-epic/sidebar/header/button-row/button/add/main";
import { TopRowSearchButton } from "./draft-epic/sidebar/header/button-row/button/search/main";
import { DraftLoomButton } from "./draft-epic/sidebar/header/button-row/button/loom/main";
import { DraftWrapper } from "./draft-epic/wrapper/main";
import { DraftSidebarElements } from "./draft-epic/sidebar/elements/main";
import { DraftSidebarButtonRow } from "./draft-epic/sidebar/header/button-row/main";
import { DraftSidebarHeaderTitle } from "./draft-epic/sidebar/header/title/main";
import { draftModel } from "./model/main";
import { ProcessStepObj } from "../../model/process/step/main";
import { DraftMediaObj } from "./model/context/media/main";
import { DraftStarObj } from "./model/point/star/main";
import { processModel } from "../../model/main";


interface DraftViewProps {
  steps: ProcessStepObj[];
  media: DraftMediaObj[];
  stars: DraftStarObj[];
  spawnStar: (draftMedia: DraftMediaObj) => void;
  addMedia: (draftMedia: DraftMediaObj) => void;
  addStep: (step: ProcessStepObj) => void;
  updateStar: (i: number, data: any) => void;
}

export function DraftView({
  steps,
  media,
  stars,
  addMedia,
  spawnStar,
  addStep,
  updateStar,
}: DraftViewProps) {
  const constraintsRef = useRef(null);

  return (
    <DraftWrapper>
      <DraftController>
        <DraftControllerCenterSection>
          <DraftConstellationSection>
            <ConstellationLinks stars={stars} />
            <motion.div
              className="absolute top-0 left- 0 w-full h-full"
              ref={constraintsRef}
            >
              {stars.map((star, i) => (
                <ConstellationStar
                  star={star}
                  constraintsRef={constraintsRef}
                  updateStar={(data) => updateStar(i, data)}
                />
              ))}
            </motion.div>
          </DraftConstellationSection>
        </DraftControllerCenterSection>
        <DraftControllerBottomRow>
          <DraftControllerSteps>
            {steps.map((constellation) => (
              <DraftStep constellation={constellation} />
            ))}
          </DraftControllerSteps>
          <DraftStepsAdd
            onClick={() => addStep(processModel.process.steps.step.example)}
          />
        </DraftControllerBottomRow>
      </DraftController>
      <DraftSidebar>
        <DraftSidebarHeader>
          <DraftSidebarHeaderTitle>Elements</DraftSidebarHeaderTitle>
          <DraftSidebarButtonRow>
            <TopRowAddButton
              onClick={() => addMedia(draftModel.context.library.media.example)}
            />
            <TopRowSearchButton />
            <DraftLoomButton />
          </DraftSidebarButtonRow>
        </DraftSidebarHeader>
        <DraftSidebarElements>
          {media.map((draftMedia) => (
            <DraftCraftElement
              src={draftMedia.src}
              onClick={() => spawnStar(draftMedia)}
            />
          ))}
        </DraftSidebarElements>
      </DraftSidebar>
    </DraftWrapper>
  );
}
