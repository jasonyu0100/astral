"use client";

import Image from "next/image";
import WorkCount from "./count/main";
import WorkInfo from "./info/main";
import WorkGenre from "./genre/main";
import WorkDay from "./day/main";
import WorkDate from "./date/main";

export default function WorksWork() {
  return (
    <div className="flex flex-row w-full px-[2rem] py-[2rem] justify-between">
      <WorkCount />
      <WorkInfo />
      <WorkGenre />
      <WorkDay />
      <WorkDate />
    </div>
  );
}
