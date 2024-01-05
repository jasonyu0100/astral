"use client";

import { DraftController } from "./draft-epic/main";
import { DraftControllerCenterSection } from "./draft-epic/center/main";
import { DraftStep } from "./draft-epic/bottom/steps/step/main";
import { DraftControllerSteps } from "./draft-epic/bottom/steps/main";
import { DraftSidebar } from "./draft-epic/sidebar/main";
import { DraftControllerBottomRow } from "./draft-epic/bottom/main";
import { DraftStepsAdd } from "./draft-epic/bottom/add/main";
import { DraftConstellationSection } from "./draft-epic/center/constellation/main";
import { ConstellationLinks } from "./draft-epic/center/constellation/stars/links/main";
import { ConstellationStar } from "./draft-epic/center/constellation/stars/star/main";
import { useRef } from "react";
import { motion } from "framer-motion";
import { DraftWrapper } from "./draft-epic/wrapper/main";
import { ProcessStepObj } from "../../model/process/step/main";
import { DraftStarObj } from "./model/point/star/main";
import { processModel } from "../../model/main";
import { StarHandler, StepHandler } from "./page";

interface DraftViewProps {
  stepId: string;
  steps: ProcessStepObj[];
  stars: DraftStarObj[];
  starHandling: StarHandler;
  stepHandling: StepHandler;
}

export function DraftView({
  stepId,
  steps,
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
      <DraftSidebar/>
    </DraftWrapper>
  );
}
