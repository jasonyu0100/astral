import { Layer } from "@/(pages)/(common)/layer/main";
import { borderStyles, containerStyles } from "@/(pages)/(common)/styles/data";
import React from "react";

export function SidebarBreadcrumbs({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layer
      displayName={SidebarBreadcrumbs.name}
      sizeStyle="h-[50px] w-full"
      borderStyle={borderStyles["border-b"]}
      containerStyle={containerStyles["row-center"]}
      contentStyle={"space-x-[1rem]"}
    >
      {children}
    </Layer>
  );
}
