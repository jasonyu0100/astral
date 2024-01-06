"use client";

import { createContext, useState } from "react";
import { DraftView } from "./view";
import { processModel } from "../../model/main";
import { draftModel } from "./model/main";
import { ProcessStepObj } from "../../model/process/step/main";
import { DraftStarObj } from "./model/point/star/main";
import { CraftFile } from "@/(pages)/(cosmos)/(voyager)/craft/model/drive/section/folder/file/main";

export interface StarHandler {
  updateStar: (i: number, data: any) => void;
  spawnStar: (draftMedia: CraftFile) => void;
}

export interface StepHandler {
  addStep: (step: ProcessStepObj) => void;
  goToStep: (step: ProcessStepObj) => void;
}

export interface DraftContextObj {
  starHandler: StarHandler;
  stepHandler: StepHandler;
}

export const DraftContext = createContext<DraftContextObj>({});

export default function Page() {
  const [steps, changeSteps] = useState<ProcessStepObj[]>(
    processModel.process.steps.example
  );
  const [stepId, changeStepId] = useState<string>(steps.at(0)?.id || "");
  const [stars, changeStars] = useState<DraftStarObj[]>(
    draftModel.points.point.stars.example
  );

  const syncHandler = {
    serialize: (obj: any) => JSON.parse(JSON.stringify(obj)),
    getCurrentStep: (steps: ProcessStepObj[]) =>
      steps.filter((step) => step.id === stepId).at(0),
    syncWithinSteps: () => {
      const currentStep: ProcessStepObj = syncHandler.serialize(
        syncHandler.getCurrentStep(steps)
      );
      if (currentStep) {
        currentStep.points.draftPoint.constellation = stars;
        changeSteps((prev) =>
          prev.map((step) => (step.id === stepId ? currentStep : step))
        );
      }
    },
  };

  const stepHandler: StepHandler = {
    addStep: (step: ProcessStepObj) => {
      syncHandler.syncWithinSteps();
      changeStepId(step.id);
      changeSteps((prev) => [...prev, step]);
      changeStars(step.points.draftPoint.constellation);
    },
    goToStep: (step: ProcessStepObj) => {
      syncHandler.syncWithinSteps();
      changeStepId(step.id);
      changeStars(step.points.draftPoint.constellation);
    },
  };

  const starHandler: StarHandler = {
    updateStar: (i: number, data: any) => {
      changeStars((prev: any[]) =>
        prev.map((o: any, j: number) => (j === i ? { ...o, ...data } : o))
      );
    },

    spawnStar: (draftMedia: CraftFile) => {
      changeStars((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          x: Math.random() * 500,
          y: Math.random() * 500,
          media: draftMedia,
        },
      ]);
      alert(`Spawned Star`);
    },
  };

  return (
    <DraftContext.Provider
      value={{
        starHandler: starHandler,
        stepHandler: stepHandler,
      }}
    >
      <DraftView
        stepId={stepId}
        steps={steps}
        starHandling={starHandler}
        stepHandling={stepHandler}
        stars={stars}
      />
    </DraftContext.Provider>
  );
}
