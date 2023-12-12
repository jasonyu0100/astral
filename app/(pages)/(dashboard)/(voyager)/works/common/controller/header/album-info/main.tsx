"use client";

import Image from "next/image";
import GalleryHeaderCover from "./cover/main";
import GalleryHeaderTextMain from "./text/main/main";
import GalleryHeaderText from "./text/main";
import GalleryHeaderTextSub from "./text/sub/main";
export interface GalleryAlbumInfoProps {
  subHeading: string;
  heading: string;
}

export default function GalleryAlbumInfo({ subHeading, heading }: GalleryAlbumInfoProps) {
  return (
    <div className="flex flex-row space-x-[20px] items-center">
      <GalleryHeaderCover />
      <GalleryHeaderText>
        <GalleryHeaderTextMain>{heading}</GalleryHeaderTextMain>
        <GalleryHeaderTextSub>{subHeading}</GalleryHeaderTextSub>
      </GalleryHeaderText>
    </div>
  );
}
