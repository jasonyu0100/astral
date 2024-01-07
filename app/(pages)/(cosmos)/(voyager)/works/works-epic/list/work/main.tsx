"use client";

import { WorkCount } from "./count/main";
import { WorkInfo } from "./info/main";
import { WorkGenre } from "./genre/main";
import { WorkDay } from "./day/main";
import { WorkDate } from "./date/main";
import { Work } from "../../../model/work/main";

interface WorksWorkProps extends React.ComponentPropsWithoutRef<"a"> {
  work: Work;
}

export function WorksWork({ work, ...props }: WorksWorkProps) {
  return (
    <div className="flex flex-row w-full px-[1rem] py-[1rem]">
      <WorkCount />
      <a {...props}>
        <WorkInfo />
      </a>
      <WorkGenre />
      <WorkDay />
      <WorkDate />
    </div>
  );
}
