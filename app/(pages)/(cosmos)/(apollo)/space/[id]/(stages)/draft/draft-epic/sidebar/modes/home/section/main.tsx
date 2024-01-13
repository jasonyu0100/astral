import { Layer } from "@/(pages)/(common)/layer/main";
import { backgroundStyles } from "@/(pages)/(common)/styles/data";
import { HomeGridContainer } from "@/(pages)/(cosmos)/(voyager)/drive/(stages)/explore/home/home-epic/grid/container/main";
import React from "react";

export function DriveSectionElement({ children }: { children: React.ReactNode }) {
  return (
    <Layer
      displayName={HomeGridContainer.name}
      sizeStyle="flex-grow aspect-[11/16]"
      backgroundStyle={backgroundStyles["glass-10"]}
    >
      <div className="flex flex-col w-full h-full">{children}</div>
    </Layer>
  );
}
