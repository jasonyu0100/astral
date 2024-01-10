"use client";

import { createContext, useState } from "react";
import { DraftView } from "./view";
import { processModel } from "../../../../../tables/model/main";
import { draftTable } from "../../../../../tables/draft/table";
import { ChapterObj } from "../../../../../tables/space/chapter/main";
import { StarObj } from "../../../../../tables/draft/star/main";
import { FileObj } from "@/(pages)/(cosmos)/tables/collection/file/main";

export interface StarHandler {
  updateStar: (i: number, data: any) => void;
  spawnStar: (draftMedia: FileObj) => void;
}

export interface StepHandler {
  addStep: (step: ChapterObj) => void;
  goToStep: (step: ChapterObj) => void;
}

export interface DraftContextObj {
  starHandler: StarHandler;
  stepHandler: StepHandler;
}

export const DraftContext = createContext<DraftContextObj>({});

export default function Page() {
  const [steps, changeSteps] = useState<ChapterObj[]>(
    processModel.process.steps.example
  );
  const [stepId, changeStepId] = useState<string>(steps.at(0)?.id || "");
  const [stars, changeStars] = useState<StarObj[]>(
    draftTable.points.point.stars.example
  );

  const syncHandler = {
    serialize: (obj: any) => JSON.parse(JSON.stringify(obj)),
    getCurrentStep: (steps: ChapterObj[]) =>
      steps.filter((step) => step.id === stepId).at(0),
    syncWithinSteps: () => {
      const currentStep: ChapterObj = syncHandler.serialize(
        syncHandler.getCurrentStep(steps)
      );
      if (currentStep) {
        currentStep.points.draftPoint.stars = stars;
        changeSteps((prev) =>
          prev.map((step) => (step.id === stepId ? currentStep : step))
        );
      }
    },
  };

  const stepHandler: StepHandler = {
    addStep: (step: ChapterObj) => {
      syncHandler.syncWithinSteps();
      changeStepId(step.id);
      changeSteps((prev) => [...prev, step]);
      changeStars(step.points.draftPoint.stars);
    },
    goToStep: (step: ChapterObj) => {
      syncHandler.syncWithinSteps();
      changeStepId(step.id);
      changeStars(step.points.draftPoint.stars);
    },
  };

  const starHandler: StarHandler = {
    updateStar: (i: number, data: any) => {
      changeStars((prev: any[]) =>
        prev.map((o: any, j: number) => (j === i ? { ...o, ...data } : o))
      );
    },

    spawnStar: (draftMedia: FileObj) => {
      changeStars((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          x: Math.random() * 500,
          y: Math.random() * 500,
          file: draftMedia,
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
