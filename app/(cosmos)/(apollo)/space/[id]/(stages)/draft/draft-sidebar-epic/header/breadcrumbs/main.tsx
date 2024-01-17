import { Layer } from "@/(common)/layer/main";
import { backgroundStyles, borderStyles, containerStyles } from "@/(common)/styles/data";
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
      backgroundStyle={backgroundStyles["glass-10"]}
      borderStyle={`${borderStyles["border-all"]} ${borderStyles.rounded}`}
      className={`${containerStyles["row-center"]} space-x-[1rem] px-[1rem]`}
    >
      {children}
    </Layer>
  );
}
