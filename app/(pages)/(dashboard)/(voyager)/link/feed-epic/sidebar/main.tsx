import { Layer } from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import React from "react";

export function LinkFeedSidebar({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={LinkFeedSidebar.name}
      sizeStyle="max-w-[500px] min-w-[250px] w-1/4 h-full"
      containerStyle={containerStyles["col"]}
      backgroundStyle={backgroundStyles["glass-10"]}
      contentStyle={"py-[2rem] px-[1rem]"}
    >
      {children}
    </Layer>
  );
}
