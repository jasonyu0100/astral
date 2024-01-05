"use client";
import { createContext, useState } from "react";
import { flowModel } from "./model/main";
import { FlowMomentObj } from "./model/point/moment/main";
import { FlowView } from "./view";
import { processModel } from "../../model/main";
import { ProcessStepObj } from "../../model/process/step/main";
import { CraftFile } from "@/(pages)/(dashboard)/(voyager)/craft/model/drive/section/folder/file/main";

interface FlowContextTypes {
  updateCurrentMoment: (moment: FlowMomentObj) => void;
}

export const FlowContext = createContext<FlowContextTypes>({
  updateCurrentMoment: () => {},
});

export interface MomentHandler {
  updateCurrentMoment: (moment: FlowMomentObj) => void;
  addMomentToStep: (moment: FlowMomentObj) => void;
  addSnapshotToMoment: (snapshot: CraftFile) => void;
  addSnapshotToGallery: (snapshot: CraftFile) => void;
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
  snapshots: CraftFile[];
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

  const [gallerySnapshots, changeGallerySnapshots] = useState<CraftFile[]>(
    flowModel.context.gallery.example
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
        currentStep.points.flowPoint.timeline = moments;
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
      changeMoments(step.points.flowPoint.timeline);
      changeMomentId(step.points.flowPoint.timeline.at(-1)?.id || "");
    },
    goToStep: (step: ProcessStepObj) => {
      syncHandler.syncWithinSteps();
      const index = steps.indexOf(step);
      changeStepId(step.id);
      changeMoments(step.points.flowPoint.timeline);
      changeMomentId(step.points.flowPoint.timeline.at(index)?.id || "");
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
    addSnapshotToGallery: (snapshot: CraftFile) => {
      changeGallerySnapshots((prev) => [...prev, snapshot]);
    },
  };

  return (
    <FlowContext.Provider
      value={{
        updateCurrentMoment: momentHandler.updateCurrentMoment,
      }}
    >
      <FlowView
        momentId={momentId}
        stepId={stepId}
        moments={moments}
        steps={steps}
        snapshots={gallerySnapshots}
        momentHandler={momentHandler}
        stepHandler={stepHandler}
      />
    </FlowContext.Provider>
  );
}
