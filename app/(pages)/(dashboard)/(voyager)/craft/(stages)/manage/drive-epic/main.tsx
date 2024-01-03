import { Layer } from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import React from "react";

export function DriveController({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={DriveController.name}
      sizeStyle="flex-grow h-full"
      containerStyle={containerStyles["col"]}
      backgroundStyle={backgroundStyles["glass-5"]}
      contentStyle="px-[3rem] py-[1rem] space-y-[3rem] overflow-auto"
    >
      {children}
    </Layer>
  );
}
