import Layer from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import React from "react";

export default function LinkFeedSidebar({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={LinkFeedSidebar.name}
      sizeStyle="max-w-[400px] min-w-[250px] w-1/4 h-full"
      containerStyle={containerStyles["col"]}
      backgroundStyle={backgroundStyles["glass-5"]}
      borderStyle={borderStyles["border-l"]}
      contentStyle="p-[2rem] space-y-[4rem]"
    >
      {children}
    </Layer>
  );
}
