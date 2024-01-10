"use client";
import { createContext, useState } from "react";
import { flowModel } from "../../../../../../../../model/main";
import { SessionObj } from "../../../../../../../../model/point/minute/main";
import { FlowView } from "./view";
import { processModel } from "../../../../../tables/model/main";
import { ChapterObj } from "../../../../../tables/space/chapter/main";
import { FileObj } from "@/(pages)/(cosmos)/tables/collection/file/main";

interface FlowContextObj {
  momentHandler: MomentHandler;
  stepHandler: StepHandler;
}

export const FlowContext = createContext<FlowContextObj>({});

export interface MomentHandler {
  updateCurrentMoment: (moment: SessionObj) => void;
  addMomentToStep: (moment: SessionObj) => void;
  addSnapshotToMoment: (snapshot: FileObj) => void;
}

export interface StepHandler {
  addStep: (step: ChapterObj) => void;
  goToStep: (step: ChapterObj) => void;
}
export interface FlowViewProps {
  momentId: string;
  stepId: string;
  moments: SessionObj[];
  steps: ChapterObj[];
  momentHandler: MomentHandler;
  stepHandler: StepHandler;
}

export default function Page() {
  const [steps, changeSteps] = useState<ChapterObj[]>(
    processModel.process.steps.example
  );
  const [stepId, changeStepId] = useState<string>(steps.at(0)?.id || "");

  const [moments, changeMoments] = useState<SessionObj[]>(
    flowModel.points.point.moments.example
  );
  const [momentId, changeMomentId] = useState<string>(moments.at(0)?.id || "");

  const syncHandler = {
    serialize: (obj: any) => JSON.parse(JSON.stringify(obj)),
    getCurrentStep: (steps: ChapterObj[]) =>
      steps.filter((step) => step.id === stepId).at(0),
    syncWithinSteps: () => {
      const currentStep: ChapterObj = syncHandler.serialize(
        syncHandler.getCurrentStep(steps)
      );
      if (currentStep) {
        currentStep.points.flowPoint.moments = moments;
        const newStep = currentStep;
        changeSteps((prev) =>
          prev.map((step) => (step.id === stepId ? newStep : step))
        );
      }
    },
  };

  const stepHandler : StepHandler = {
    addStep: (step: ChapterObj) => {
      syncHandler.syncWithinSteps();
      changeStepId(step.id);
      changeSteps((prev) => [...prev, step]);
      changeMoments(step.points.flowPoint.moments);
      changeMomentId(step.points.flowPoint.moments.at(-1)?.id || "");
    },
    goToStep: (step: ChapterObj) => {
      syncHandler.syncWithinSteps();
      const index = steps.indexOf(step);
      changeStepId(step.id);
      changeMoments(step.points.flowPoint.moments);
      changeMomentId(step.points.flowPoint.moments.at(index)?.id || "");
    },
  };

  const momentHelper = {
    updateMomentsWithCurrent: (newCurrentMoment: SessionObj) => {
      changeMoments((prev) =>
        prev.map((moment) =>
          moment.id === newCurrentMoment.id ? newCurrentMoment : moment
        )
      );
    },

    getCurrentMoment: () => {
      for (let moment of moments) {
        if (moment.id === momentId) {
          return moment;
        }
      }
      return null;
    },
  };

  const momentHandler: MomentHandler = {
    updateCurrentMoment: (moment: SessionObj) => {
      changeMomentId(moment.id);
    },

    addMomentToStep: (moment: SessionObj) => {
      changeMomentId(moment.id);
      changeMoments((prev) => [...prev, moment]);
    },

    addSnapshotToMoment: (snapshot: FileObj) => {
      const currentMoment = momentHelper.getCurrentMoment();
      if (currentMoment) {
        const newCurrentMoment = {
          ...currentMoment,
          snapshots: [...currentMoment.minutes, snapshot],
        };
        momentHelper.updateMomentsWithCurrent(newCurrentMoment);
      }
    },
  };

  return (
    <FlowContext.Provider
      value={{
        momentHandler,
        stepHandler
      }}
    >
      <FlowView
        momentId={momentId}
        stepId={stepId}
        moments={moments}
        steps={steps}
        momentHandler={momentHandler}
        stepHandler={stepHandler}
      />
    </FlowContext.Provider>
  );
}
