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

export default function Page() {
  const [steps, changeSteps] = useState<ProcessStepObj[]>(
    processModel.process.steps.example
  );

  const [moments, changeMoments] = useState<FlowMomentObj[]>(
    flowModel.points.point.moments.example
  );

  const [currentMoment, changeCurrentMoment] = useState<FlowMomentObj>(
    flowModel.points.point.moments.moment.example
  );
  const [gallerySnapshots, changeGallerySnapshots] = useState(
    flowModel.context.gallery.example
  );

  const updateCurrentMoment = (moment: FlowMomentObj) => {
    changeCurrentMoment(moment);
  };

  const addStep = (step: ProcessStepObj) => {
    changeSteps((prev) => [...prev, step]);
    changeCurrentMoment(
      step.points.flowPoint.timeline.at(-1) ||
        flowModel.points.point.moments.moment.example
    );
    changeMoments(step.points.flowPoint.timeline);
  };

  const addMomentToStep = (moment: FlowMomentObj) => {
    changeCurrentMoment(moment);
    changeMoments((prev) => [...prev, moment]);
  };

  const updateMomentsWithCurrent = (newCurrentMoment: FlowMomentObj) => {
    changeMoments((prev) =>
      prev.map((moment) =>
        moment.id === newCurrentMoment.id ? newCurrentMoment : moment
      )
    );
  };

  const addSnapshotToMoment = (snapshot: FlowSnapshotObj) => {
    changeCurrentMoment((prev) => {
      const newCurrentMoment = {
        ...prev,
        snapshots: [...prev.snapshots, snapshot],
      };
      updateMomentsWithCurrent(newCurrentMoment);
      return newCurrentMoment;
    });
  };

  const addSnapshotToGallery = (snapshot: FlowSnapshotObj) => {
    changeGallerySnapshots((prev) => [...prev, snapshot]);
  };

  return (
    <FlowContext.Provider
      value={{
        updateCurrentMoment,
      }}
    >
      <FlowView
        currentMoment={currentMoment}
        moments={moments}
        steps={steps}
        snapshots={gallerySnapshots}
        addStep={addStep}
        addSnapshotToGallery={addSnapshotToGallery}
        addSnapshotToMoment={addSnapshotToMoment}
        addMomentToStep={addMomentToStep}
      />
    </FlowContext.Provider>
  );
}
