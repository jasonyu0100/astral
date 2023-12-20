"use client";

import { backgroundStyles, borderStyles, containerStyles } from "@/(pages)/(common)/styles/data";
import Layer from "@/(pages)/(common)/layer/main";

export default function WorksContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={WorksContainer.name}
      sizeStyle="h-full max-w-[1500px]"
      containerStyle={containerStyles.col}
      backgroundStyle={backgroundStyles["glass-5"]}
      borderStyle={`${borderStyles["rounded-t"]} ${borderStyles["border-all"]}`}
    >
      {children}
    </Layer>
  );
}
