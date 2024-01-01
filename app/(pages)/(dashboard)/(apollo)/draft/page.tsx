"use client";

import DraftController from "./draft-epic/main";
import DraftSidebarHeader from "./draft-epic/sidebar/header/main";
import DraftControllerCenterSection from "./draft-epic/center/main";
import DraftControllerBottomRow from "./draft-epic/bottom/main";
import DraftStep from "./draft-epic/bottom/steps/step/main";
import DraftControllerSteps from "./draft-epic/bottom/steps/main";
import DraftSidebar from "./draft-epic/sidebar/main";
import DraftCraftElement from "./draft-epic/sidebar/elements/element/main";
import DraftStepsAdd from "./draft-epic/bottom/add/main";
import DraftConstellationSection from "./draft-epic/center/constellation/main";
import ConstellationLinks from "./draft-epic/center/constellation/stars/links/main";
import ConstellationStar from "./draft-epic/center/constellation/stars/star/main";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import TopRowAddButton from "./draft-epic/sidebar/header/button-row/button/add/main";
import TopRowSearchButton from "./draft-epic/sidebar/header/button-row/button/search/main";
import DraftLoomButton from "./draft-epic/sidebar/header/button-row/button/loom/main";
import DraftWrapper from "./draft-epic/wrapper/main";
import DraftSidebarElements from "./draft-epic/sidebar/elements/main";
import DraftSidebarButtonRow from "./draft-epic/sidebar/header/button-row/main";
import DraftSidebarHeaderTitle from "./draft-epic/sidebar/header/title/main";
import { draftModel } from "./model/main";
import { processModel } from "../model/main";

export default function Page() {
  const [steps, changeSteps] = useState(
    processModel.process.steps.example
  );
  const [media, changeMedia] = useState(draftModel.context.library.example);
  const [draftStars, changeDraftStars] = useState(draftModel.points.point.constellation.example);
  const constraintsRef = useRef(null);

  return (
    <DraftWrapper>
      <DraftController>
        <DraftControllerCenterSection>
          <DraftConstellationSection>
            <ConstellationLinks stars={draftStars} />
            <motion.div
              className="absolute top-0 left- 0 w-full h-full"
              ref={constraintsRef}
            >
              {draftStars.map((star, i) => (
                <ConstellationStar
                  star={star}
                  constraintsRef={constraintsRef}
                  updateStar={(data) =>
                    changeDraftStars((prev) =>
                      prev.map((o, j) => (j === i ? { ...o, ...data } : o))
                    )
                  }
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
            onClick={() =>
              changeSteps((prev) => [
                ...prev,
                processModel.process.steps.step.example
              ])
            }
          />
        </DraftControllerBottomRow>
      </DraftController>
      <DraftSidebar>
        <DraftSidebarHeader>
          <DraftSidebarHeaderTitle>Elements</DraftSidebarHeaderTitle>
          <DraftSidebarButtonRow>
            <TopRowAddButton
              onClick={() =>
                changeMedia((prev) => [...prev, draftModel.context.library.media.example])
              }
            />
            <TopRowSearchButton />
            <DraftLoomButton />
          </DraftSidebarButtonRow>
        </DraftSidebarHeader>
        <DraftSidebarElements>
          {media.map((draftElement) => (
            <DraftCraftElement
              src={draftElement.src}
              onClick={() =>
                changeDraftStars((prev) => [
                  ...prev,
                  {
                    x: Math.random() * 500,
                    y: Math.random() * 500,
                    element: draftElement,
                  },
                ])
              }
            />
          ))}
        </DraftSidebarElements>
      </DraftSidebar>
    </DraftWrapper>
  );
}
