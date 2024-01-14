import { Layer } from "@/(common)/layer/main";
import {
  backgroundStyles,
  containerStyles,
} from "@/(common)/styles/data";
import React, { useContext } from "react";
import { FlowContext } from "../page";
import { FlowSidebarColumn } from "./column/main";
import { FlowSidebarEntry } from "./column/section/entry/main";
import { FlowSidebarSection } from "./column/section/main";

export function FlowSidebar() {
  const { moments } = useContext(FlowContext);
  return (
    <Layer
      displayName={FlowSidebar.name}
      sizeStyle="max-w-[500px] min-w-[250px] w-1/4 h-full"
      containerStyle={containerStyles["col"]}
      backgroundStyle={backgroundStyles["glass-10"]}
      contentStyle={"py-[1rem] px-[1rem]"}
    >
      <FlowSidebarColumn>
        <FlowSidebarSection>
          {moments.map((moment) => (
            <FlowSidebarEntry moment={moment} />
          ))}
        </FlowSidebarSection>
      </FlowSidebarColumn>
    </Layer>
  );
}
