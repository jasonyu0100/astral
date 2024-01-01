"use client";

import { useState } from "react";
import DraftView from "./view";
import { processModel } from "../model/main";
import { draftModel } from "./model/main";
import { DraftMediaObj } from "./model/context/media/main";
import { ProcessStepObj } from "../model/process/step/main";

export default function Page() {
  const [steps, changeSteps] = useState(processModel.process.steps.example);
  const [media, changeMedia] = useState(draftModel.context.library.example);
  const [stars, changeStars] = useState(draftModel.points.point.stars.example);

  const updateStar = (i: number, data: any) => {
    changeStars((prev: any[]) =>
      prev.map((o: any, j: number) => (j === i ? { ...o, ...data } : o))
    );
  };

  const spawnStar = (draftMedia: DraftMediaObj) => {
    changeStars((prev) => [
      ...prev,
      {
        x: Math.random() * 500,
        y: Math.random() * 500,
        media: draftMedia,
      },
    ]);
    alert(`Spawned Star`);
  };

  const addMedia = (draftMedia: DraftMediaObj) => {
    changeMedia((prev) => [...prev, draftModel.context.library.media.example]);
    alert(`Added Media`);
  };

  const addStep = (step: ProcessStepObj) => {
    changeSteps((prev) => [...prev, step]);
    alert(`Added Step`);
  };

  return (
    <DraftView
      steps={steps}
      media={media}
      spawnStar={spawnStar}
      addMedia={addMedia}
      addStep={addStep}
      updateStar={updateStar}
      stars={stars}
    />
  );
}
