"use client";

import { WorksHeaderCover } from "./cover/main";
import { WorksHeaderTextMain } from "./text/main/main";
import { WorksHeaderText } from "./text/main";
import { WorksHeaderTextSub } from "./text/sub/main";
export interface WorksAlbumInfoProps {
  subHeading: string;
  heading: string;
}

export function WorksAlbumInfo({ subHeading, heading }: WorksAlbumInfoProps) {
  return (
    <div className="flex flex-row space-x-[2rem] items-center ml-[7rem]">
      <WorksHeaderCover />
      <WorksHeaderText>
        <WorksHeaderTextMain>{heading}</WorksHeaderTextMain>
        <WorksHeaderTextSub>{subHeading}</WorksHeaderTextSub>
      </WorksHeaderText>
    </div>
  );
}
