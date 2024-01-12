import { Layer } from "@/(pages)/(common)/layer/main";
import { backgroundStyles, borderStyles, containerStyles } from "@/(pages)/(common)/styles/data";
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
      containerStyle={containerStyles["row-center"]}
      contentStyle={"space-x-[1rem] px-[1rem]"}
    >
      {children}
    </Layer>
  );
}
