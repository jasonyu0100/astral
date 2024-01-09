"use client";
import { createContext, useState } from "react";
import { flowModel } from "./model/main";
import { FlowMomentObj } from "./model/point/moment/main";
import { FlowView } from "./view";
import { processModel } from "../../model/main";
import { ProcessStepObj } from "../../model/process/step/main";
import { CraftFile } from "@/(pages)/(cosmos)/(voyager)/craft/model/drive/section/folder/file/type";

interface FlowContextObj {
  momentHandler: MomentHandler;
  stepHandler: StepHandler;
}

export const FlowContext = createContext<FlowContextObj>({});

export interface MomentHandler {
  updateCurrentMoment: (moment: FlowMomentObj) => void;
  addMomentToStep: (moment: FlowMomentObj) => void;
  addSnapshotToMoment: (snapshot: CraftFile) => void;
}

export interface StepHandler {
  addStep: (step: ProcessStepObj) => void;
  goToStep: (step: ProcessStepObj) => void;
}
export interface FlowViewProps {
  momentId: string;
  stepId: string;
  moments: FlowMomentObj[];
  steps: ProcessStepObj[];
  momentHandler: MomentHandler;
  stepHandler: StepHandler;
}

export default function Page() {
  const [steps, changeSteps] = useState<ProcessStepObj[]>(
    processModel.process.steps.example
  );
  const [stepId, changeStepId] = useState<string>(steps.at(0)?.id || "");

  const [moments, changeMoments] = useState<FlowMomentObj[]>(
    flowModel.points.point.moments.example
  );
  const [momentId, changeMomentId] = useState<string>(moments.at(0)?.id || "");

  const syncHandler = {
    serialize: (obj: any) => JSON.parse(JSON.stringify(obj)),
    getCurrentStep: (steps: ProcessStepObj[]) =>
      steps.filter((step) => step.id === stepId).at(0),
    syncWithinSteps: () => {
      const currentStep: ProcessStepObj = syncHandler.serialize(
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
    addStep: (step: ProcessStepObj) => {
      syncHandler.syncWithinSteps();
      changeStepId(step.id);
      changeSteps((prev) => [...prev, step]);
      changeMoments(step.points.flowPoint.moments);
      changeMomentId(step.points.flowPoint.moments.at(-1)?.id || "");
    },
    goToStep: (step: ProcessStepObj) => {
      syncHandler.syncWithinSteps();
      const index = steps.indexOf(step);
      changeStepId(step.id);
      changeMoments(step.points.flowPoint.moments);
      changeMomentId(step.points.flowPoint.moments.at(index)?.id || "");
    },
  };

  const momentHelper = {
    updateMomentsWithCurrent: (newCurrentMoment: FlowMomentObj) => {
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
    updateCurrentMoment: (moment: FlowMomentObj) => {
      changeMomentId(moment.id);
    },

    addMomentToStep: (moment: FlowMomentObj) => {
      changeMomentId(moment.id);
      changeMoments((prev) => [...prev, moment]);
    },

    addSnapshotToMoment: (snapshot: CraftFile) => {
      const currentMoment = momentHelper.getCurrentMoment();
      if (currentMoment) {
        const newCurrentMoment = {
          ...currentMoment,
          snapshots: [...currentMoment.snapshots, snapshot],
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
