"use client";

import {
  backgroundStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import Layer from "@/(pages)/(common)/layer/main";

export default function WorksContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <Layer
        displayName={WorksContainer.name}
        sizeStyle="h-full flex-grow"
        backgroundStyle={backgroundStyles["glass-5"]}
        containerStyle={containerStyles.col}
        contentStyle="overflow-auto"
      >
        {children}
      </Layer>
  );
}
