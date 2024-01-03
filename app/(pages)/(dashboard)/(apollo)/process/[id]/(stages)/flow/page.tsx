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
  const [currStepId, changeCurrStepId] = useState<string>(
    steps.at(0)?.id || ""
  );

  const [currMomentId, changeCurrMomentId] = useState<string>("");
  const [moments, changeMoments] = useState<FlowMomentObj[]>(
    flowModel.points.point.moments.example
  );

  const [gallerySnapshots, changeGallerySnapshots] = useState(
    flowModel.context.gallery.example
  );

  const stepHelper = {
    getCurrentStep: () => {
      for (let step of steps) {
        if (step.id === currStepId) {
          return step;
        }
      }
      return null;
    },
    updateStep: () => {
      const currentStep = stepHelper.getCurrentStep();
      if (currentStep) {
        currentStep.points.flowPoint.timeline = moments;
        const newStep = JSON.parse(JSON.stringify(currentStep));
        changeSteps((prev) =>
          prev.map((step) => (step.id === currStepId ? newStep : step))
        );
      }
    },
  };

  const stepHandling = {
    addStep: (step: ProcessStepObj) => {
      changeSteps((prev) => [...prev, step]);
      changeCurrMomentId(step.points.flowPoint.timeline.at(-1)?.id || "");
      changeMoments(step.points.flowPoint.timeline);
    },
    goToStep: (step: ProcessStepObj) => {
      const index = steps.indexOf(step);
      changeCurrStepId(step.id);
      changeCurrMomentId(step.points.flowPoint.timeline.at(index)?.id || "");
      changeMoments(step.points.flowPoint.timeline);
      stepHelper.updateStep();
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
        if (moment.id === currMomentId) {
          return moment;
        }
      }
      return null;
    },
  };

  const momentHandling: MomentHandling = {
    updateCurrentMoment: (moment: FlowMomentObj) => {
      changeCurrMomentId(moment.id);
    },

    addMomentToStep: (moment: FlowMomentObj) => {
      changeCurrMomentId(moment.id);
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
        currMomentId={currMomentId}
        currStepId={currStepId}
        moments={moments}
        steps={steps}
        snapshots={gallerySnapshots}
        momentHandling={momentHandling}
        stepHandling={stepHandling}
      />
    </FlowContext.Provider>
  );
}
