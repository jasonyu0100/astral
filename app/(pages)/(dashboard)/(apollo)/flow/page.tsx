"use client";

import Layer from "@/(pages)/(common)/layer/main";
import { borderStyles } from "@/(pages)/(common)/styles/data";
import FlowController from "./(common)/controller/main";
import FlowControllerTopRow from "./(common)/controller/top-row/main";
import FlowControllerCenterSection from "./(common)/controller/center-section/main";
import FlowControllerBottomRow from "./(common)/controller/bottom-row/main";
import FlowConstellation from "./(common)/controller/bottom-row/constellation-row/item/main";
import FlowControllerConstellationRow from "./(common)/controller/bottom-row/constellation-row/main";
import FlowSnapshotSection from "./(common)/controller/center-section/craft/main";
import FlowSnapshotElement from "./(common)/controller/center-section/craft/element/main";
import FlowConstellationAdd from "./(common)/controller/bottom-row/add/main";
import FlowSourceControlSection from "./(common)/controller/center-section/tree/main";
import FlowSourceControlBranch from "./(common)/controller/center-section/tree/branch/main";
import FlowTopRowAddButton from "./(common)/controller/top-row/button/add/main";
import FlowTopRowLoomButton from "./(common)/controller/top-row/button/loom/main";
import FlowTopRowSearchButton from "./(common)/controller/top-row/button/search/main";
import { useState } from "react";
import { defaultFlowSnapshot, defaultFlowSnapshots } from "./data";
import { ApolloConstellation, defaultApolloConstellation, defaultApolloConstellations } from "../data";

export default function FlowPage() {
  const [currentConstellation, changeCurrentConstellation] = useState<ApolloConstellation>(defaultApolloConstellation);
  const [constellations, changeConstellations] = useState(defaultApolloConstellations);
  const [flowSnapshots, changeFlowSnapshots] = useState(defaultFlowSnapshots);

  return (
    <FlowController>
      <FlowControllerTopRow>
        <FlowTopRowAddButton
          onClick={() =>
            changeFlowSnapshots((prev) => [...prev, defaultFlowSnapshot])
          }
        />
        <FlowTopRowSearchButton />
        <FlowTopRowLoomButton />
      </FlowControllerTopRow>
      <FlowControllerCenterSection>
        <FlowSourceControlSection>
          <FlowSourceControlBranch />
          <FlowSourceControlBranch />
          <FlowSourceControlBranch />
          <FlowSourceControlBranch />
        </FlowSourceControlSection>
        <FlowSnapshotSection>
          {flowSnapshots.map((flowSnapshot) => (
            <FlowSnapshotElement src={flowSnapshot.src} />
          ))}
        </FlowSnapshotSection>
      </FlowControllerCenterSection>
      <FlowControllerBottomRow>
        <FlowConstellationAdd
          onClick={() => changeConstellations((prev) => [...prev, defaultApolloConstellation])}
        />
        <Layer
          sizeStyle="h-[80px]"
          borderStyle={borderStyles["border-r"]}
        ></Layer>
        <FlowControllerConstellationRow>
          {constellations.map((constellation) => (
            <FlowConstellation
              constellation={constellation}
              onClick={() => changeCurrentConstellation(constellation)}
            />
          ))}
        </FlowControllerConstellationRow>
      </FlowControllerBottomRow>
    </FlowController>
  );
}
