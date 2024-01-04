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
import { StarHandling, StepHandling } from "./page";
import { craftModel } from "@/(pages)/(dashboard)/(voyager)/craft/model/main";
import { Divider } from "@/(pages)/(common)/divider/main";

interface DraftViewProps {
  stepId: string;
  steps: ProcessStepObj[];
  media: DraftMediaObj[];
  stars: DraftStarObj[];
  starHandling: StarHandling;
  stepHandling: StepHandling;
}

export function DraftView({
  stepId,
  steps,
  media,
  stars,
  starHandling,
  stepHandling,
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
                  updateStar={(data) => starHandling.updateStar(i, data)}
                />
              ))}
            </motion.div>
          </DraftConstellationSection>
        </DraftControllerCenterSection>
        <DraftControllerBottomRow>
          <DraftControllerSteps>
            {steps.map((step) => (
              <DraftStep
                step={step}
                active={step.id === stepId}
                onClick={() => stepHandling.goToStep(step)}
              />
            ))}
          </DraftControllerSteps>
          <DraftStepsAdd
            onClick={() =>
              stepHandling.addStep({
                ...processModel.process.steps.step.example,
                id: Date.now().toFixed().toString(),
              })
            }
          />
        </DraftControllerBottomRow>
      </DraftController>
      <DraftSidebar>
        <div className="flex flex-col space-y-[2rem] overflow-auto pr-[1rem]">
          <div className="flex flex-col space-y-[1rem]">
            <div className="w-full h-[250px] p-[20px] bg-white flex flex-col items-center">
              <img
                className="w-full flex-grow h-[200px] object-contain bg-black"
                src={craftModel.drive.sections.section.example.thumbnail.src}
              />
            </div>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur. Non viverra turpis proin
              molestie enim eros. Dolor duis fringilla id leo leo duis. Tortor
              dui quis sagittis nibh blandit. Commodo nibh adipiscing et
            </p>
          </div>
          <Divider />
          <div className="flex flex-col space-y-[2rem]">
            <DraftSidebarHeader>
              <div className="bg-white flex-grow h-[20px]"></div>
              <DraftSidebarButtonRow>
                <TopRowAddButton
                  onClick={() =>
                    starHandling.addMedia(
                      draftModel.context.library.media.example
                    )
                  }
                />
                <TopRowSearchButton />
                <DraftLoomButton />
              </DraftSidebarButtonRow>
            </DraftSidebarHeader>
            {media.map((draftMedia) => (
              <div className="flex flex-row items-center space-x-[2rem]">
                <button
                  className="h-[120px] w-[120px]"
                  onClick={() => starHandling.spawnStar(draftMedia)}
                >
                  <img
                    src={draftMedia.src}
                    className="h-full w-full rounded-full"
                  />
                </button>
                <div className="flex flex-col flex-grow">
                  <p className="text-white font-extraBold">{draftMedia.name}</p>
                  <p className="text-white font-bold">
                    123 drafts - 3 weeks ago
                  </p>
                  <p className="text-white font-regular">
                    {draftMedia.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* <DraftSidebarElements>
          {media.map((draftMedia) => (
            <DraftCraftElement
              src={draftMedia.src}
              onClick={() => starHandling.spawnStar(draftMedia)}
            />
          ))}
        </DraftSidebarElements> */}
      </DraftSidebar>
    </DraftWrapper>
  );
}
