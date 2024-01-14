"use client";
import { Layer } from "@/(common)/layer/main";
import { borderStyles, containerStyles } from "@/(common)/styles/data";

export function RecordShelf({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={RecordShelf.name}
      sizeStyle="h-[250px] w-full"
      containerStyle={containerStyles.row}
      borderStyle={borderStyles["border-b"]}
      contentStyle="px-[40px] space-x-[100px]"
    >
      {children}
    </Layer>
  );
}
