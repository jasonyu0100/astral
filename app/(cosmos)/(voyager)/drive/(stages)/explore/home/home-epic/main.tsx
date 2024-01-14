import { Layer } from "@/(common)/layer/main";
import {
  backgroundStyles,
  containerStyles,
} from "@/(common)/styles/data";
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
      contentStyle="p-[2rem] space-y-[3rem] overflow-auto"
    >
      {children}
    </Layer>
  );
}
