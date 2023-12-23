import Layer from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import React from "react";

export default function DriveController({
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
      contentStyle="p-[3rem] space-y-[3rem] overflow-auto"
    >
      {children}
    </Layer>
  );
}
