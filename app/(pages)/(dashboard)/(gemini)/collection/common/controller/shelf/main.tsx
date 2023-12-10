"use client";
import Layer from "@/(pages)/(dashboard)/(common)/layer/main";
import { backgroundStyles, containerStyles } from "@/(pages)/(dashboard)/(common)/layer/data";

export default function GeminiCollectionShelf({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={GeminiCollectionShelf.name}
      sizeStyle="h-[250px] w-full"
      backgroundStyle={backgroundStyles["glass-5"]}
      containerStyle={containerStyles.row}
      contentStyle="px-[40px] space-x-[100px]"
    >
      {children}
    </Layer>
  );
}
