"use client";
import Layer from "@/(pages)/(common)/layer/main";
import { backgroundStyles, borderStyles, containerStyles } from "@/(pages)/(common)/styles/data";

export default function ReleaseShelf({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={ReleaseShelf.name}
      sizeStyle="h-[250px] w-full"
      containerStyle={containerStyles.row}
      borderStyle={borderStyles["border-b"]}
      contentStyle="px-[40px] space-x-[100px]"
    >
      {children}
    </Layer>
  );
}
