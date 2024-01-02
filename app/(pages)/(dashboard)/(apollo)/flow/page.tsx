"use client";
import { useState } from "react";
import { flowModel } from "./model/main";
import { FlowMomentObj } from "./model/point/moment/main";
import { FlowView } from "./view";
import { processModel } from "../model/main";
import { ProcessStepObj } from "../model/process/step/main";
import { FlowSnapshotObj } from "./model/context/snapshot/main";

export default function Page() {
  const [moments, changeMoments] = useState<FlowMomentObj[]>(
    flowModel.points.point.moments.example
  );

  const [moment, changeMoment] = useState(
    flowModel.points.point.moments.moment.example
  );
  const [steps, changeSteps] = useState<ProcessStepObj[]>(
    processModel.process.steps.example
  );
  const [snapshots, changeSnapshots] = useState(
    flowModel.context.gallery.example
  );

  const addStep = () =>
    changeSteps((prev) => [...prev, processModel.process.steps.step.example]);

  const addSnapshot = () => {
    changeSnapshots((prev) => [
      ...prev,
      flowModel.context.gallery.snapshot.example,
    ]);
  };

  const addSnapshotToMoment = (snapshot: FlowSnapshotObj) => {
    changeMoment((prev) => {
      return {
        ...prev,
        snapshots: [...prev.snapshots, snapshot],
      };
    });
  };

  return (
    <FlowView
      moments={moments}
      moment={moment}
      steps={steps}
      snapshots={snapshots}
      addStep={addStep}
      addSnapshot={addSnapshot}
      addSnapshotToMoment={addSnapshotToMoment}
    />
  );
}
