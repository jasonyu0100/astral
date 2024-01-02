"use client";

import { WorkCount } from "./count/main";
import { WorkInfo } from "./info/main";
import { WorkGenre } from "./genre/main";
import { WorkDay } from "./day/main";
import { WorkDate } from "./date/main";

export function WorksWork() {
  return (
    <div className="flex flex-row w-full px-[2rem] py-[2rem]">
      <WorkCount />
      <WorkInfo />
      <WorkGenre />
      <WorkDay />
      <WorkDate />
    </div>
  );
}
