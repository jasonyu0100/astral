"use client";

import { backgroundStyles, borderStyles, containerStyles } from "@/(pages)/(common)/styles/data";
import Layer from "@/(pages)/(common)/layer/main";

export default function GalleryContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={GalleryContainer.name}
      sizeStyle="h-full w-full"
      containerStyle={containerStyles.col}
      backgroundStyle={backgroundStyles["glass-5"]}
      borderStyle={`${borderStyles["rounded"]} ${borderStyles["border-all"]}`}
      contentStyle="overflow-auto"
    >
      {children}
    </Layer>
  );
}
