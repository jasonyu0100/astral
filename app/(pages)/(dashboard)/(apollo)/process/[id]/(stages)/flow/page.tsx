"use client";
import { createContext, useState } from "react";
import { flowModel } from "./model/main";
import { FlowMomentObj } from "./model/point/moment/main";
import { FlowView } from "./view";
import { processModel } from "../../model/main";
import { ProcessStepObj } from "../../model/process/step/main";
import { FlowSnapshotObj } from "./model/context/snapshot/main";

interface FlowContextTypes {
  updateCurrentMoment: (moment: FlowMomentObj) => void;
}

export const FlowContext = createContext<FlowContextTypes>({
  updateCurrentMoment: () => {},
});

export interface MomentHandling {
  updateCurrentMoment: (moment: FlowMomentObj) => void;
  addMomentToStep: (moment: FlowMomentObj) => void;
  addSnapshotToMoment: (snapshot: FlowSnapshotObj) => void;
  addSnapshotToGallery: (snapshot: FlowSnapshotObj) => void;
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

  const [moments, changeMoments] = useState<FlowMomentObj[]>(
    flowModel.points.point.moments.example
  );
  const [momentId, changeMomentId] = useState<string>(moments.at(0)?.id || "");

  const [gallerySnapshots, changeGallerySnapshots] = useState(
    flowModel.context.gallery.example
  );

  const syncHandler = {
    getCurrentStep: () => {
      for (let step of steps) {
        if (step.id === stepId) return step;
      }
    },
    syncStepWithMoments: () => {
      const currentStep: ProcessStepObj = JSON.parse(
        JSON.stringify(syncHandler.getCurrentStep())
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

  const stepHandling = {
    addStep: (step: ProcessStepObj) => {
      syncHandler.syncStepWithMoments();
      changeStepId(step.id);
      changeSteps((prev) => [...prev, step]);
      changeMoments(step.points.flowPoint.timeline);
      changeMomentId(step.points.flowPoint.timeline.at(-1)?.id || "");
    },
    goToStep: (step: ProcessStepObj) => {
      syncHandler.syncStepWithMoments();
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

  const momentHandling: MomentHandling = {
    updateCurrentMoment: (moment: FlowMomentObj) => {
      changeMomentId(moment.id);
    },

    addMomentToStep: (moment: FlowMomentObj) => {
      changeMomentId(moment.id);
      changeMoments((prev) => [...prev, moment]);
    },

    addSnapshotToMoment: (snapshot: FlowSnapshotObj) => {
      const currentMoment = momentHelper.getCurrentMoment();
      if (currentMoment) {
        const newCurrentMoment = {
          ...currentMoment,
          snapshots: [...currentMoment.snapshots, snapshot],
        };
        momentHelper.updateMomentsWithCurrent(newCurrentMoment);
      }
    },
    addSnapshotToGallery: (snapshot: FlowSnapshotObj) => {
      changeGallerySnapshots((prev) => [...prev, snapshot]);
    },
  };

  return (
    <FlowContext.Provider
      value={{
        updateCurrentMoment: momentHandling.updateCurrentMoment,
      }}
    >
      <FlowView
        momentId={momentId}
        stepId={stepId}
        moments={moments}
        steps={steps}
        snapshots={gallerySnapshots}
        momentHandling={momentHandling}
        stepHandling={stepHandling}
      />
    </FlowContext.Provider>
  );
}
