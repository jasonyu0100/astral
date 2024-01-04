"use client";

import { useState } from "react";
import { DraftView } from "./view";
import { processModel } from "../../model/main";
import { draftModel } from "./model/main";
import { DraftMediaObj } from "./model/context/media/main";
import { ProcessStepObj } from "../../model/process/step/main";
import { DraftStarObj } from "./model/point/star/main";

export interface StarHandling {
  updateStar: (i: number, data: any) => void;
  spawnStar: (draftMedia: DraftMediaObj) => void;
  addMedia: (draftMedia: DraftMediaObj) => void;
}

export interface StepHandling {
  addStep: (step: ProcessStepObj) => void;
  goToStep: (step: ProcessStepObj) => void;
}

export default function Page() {
  const [steps, changeSteps] = useState<ProcessStepObj[]>(
    processModel.process.steps.example
  );
  const [stepId, changeStepId] = useState<string>(steps.at(0)?.id || "");
  const [media, changeMedia] = useState<DraftMediaObj[]>(
    draftModel.context.library.example
  );
  const [stars, changeStars] = useState<DraftStarObj[]>(
    draftModel.points.point.stars.example
  );

  const stepHelper = {
    getCurrentStep: () => {
      for (let step of steps) {
        if (step.id === stepId) return step;
      }
    },
    syncStepWithStars: () => {
      const currentStep: ProcessStepObj = JSON.parse(
        JSON.stringify(stepHelper.getCurrentStep())
      );
      if (currentStep) {
        currentStep.points.draftPoint.constellation = stars;
        changeSteps((prev) =>
          prev.map((step) => (step.id === stepId ? currentStep : step))
        );
      }
    },
  };

  const stepHandling = {
    addStep: (step: ProcessStepObj) => {
      stepHelper.syncStepWithStars();
      changeStepId(step.id);
      changeSteps((prev) => [...prev, step]);
      changeStars(step.points.draftPoint.constellation);
    },
    goToStep: (step: ProcessStepObj) => {
      stepHelper.syncStepWithStars();
      changeStepId(step.id);
      changeStars(step.points.draftPoint.constellation);
    },
  };

  const starHandling = {
    updateStar: (i: number, data: any) => {
      changeStars((prev: any[]) =>
        prev.map((o: any, j: number) => (j === i ? { ...o, ...data } : o))
      );
    },

    spawnStar: (draftMedia: DraftMediaObj) => {
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
    addMedia: (draftMedia: DraftMediaObj) => {
      changeMedia((prev) => [...prev, draftMedia]);
      alert(`Added Media`);
    },
  };

  return (
    <DraftView
      stepId={stepId}
      steps={steps}
      media={media}
      starHandling={starHandling}
      stepHandling={stepHandling}
      stars={stars}
    />
  );
}
