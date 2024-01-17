"use client";

import {
  backgroundStyles,
  containerStyles,
} from "@/(common)/styles/data";
import { Layer } from "@/(common)/layer/main";

export function SpacesContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <Layer
        displayName={SpacesContainer.name}
        sizeStyle="h-full flex-grow"
        backgroundStyle={backgroundStyles["glass-5"]}
        className={`overflow-auto ${containerStyles.col}`}
      >
        {children}
      </Layer>
  );
}
