"use client";

import Layer from "@/(pages)/(common)/layer/main";
import { borderStyles } from "@/(pages)/(common)/styles/data";
import FlowController from "./(common)/controller/main";
import FlowControllerTopRow from "./(common)/controller/top/main";
import FlowControllerCenter from "./(common)/controller/center/main";
import FlowControllerBottomRow from "./(common)/controller/bottom/main";
import FlowConstellation from "./(common)/controller/bottom/constellation-row/item/main";
import FlowControllerConstellationRow from "./(common)/controller/bottom/constellation-row/main";
import FlowSnapshotSection from "./(common)/controller/center/craft/main";
import FlowSnapshotElement from "./(common)/controller/center/craft/element/main";
import FlowConstellationAdd from "./(common)/controller/bottom/add/main";
import FlowTree from "./(common)/controller/center/tree/main";
import FlowSourceControlBranch from "./(common)/controller/center/tree/branch/main";
import FlowTopRowAddButton from "./(common)/controller/top/button/add/main";
import FlowTopRowLoomButton from "./(common)/controller/top/button/loom/main";
import FlowTopRowSearchButton from "./(common)/controller/top/button/search/main";
import { useState } from "react";
import { defaultFlowSnapshot, defaultFlowSnapshots } from "./data";
import { ApolloConstellation, defaultApolloConstellation, defaultApolloConstellations } from "../data";

export default function FlowPage() {
  const [currentConstellation, changeCurrentConstellation] = useState<ApolloConstellation>(defaultApolloConstellation);
  const [constellations, changeConstellations] = useState<ApolloConstellation[]>(defaultApolloConstellations);
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
      <FlowControllerCenter>
        <FlowTree>
          <FlowSourceControlBranch />
          <FlowSourceControlBranch />
          <FlowSourceControlBranch />
          <FlowSourceControlBranch />
        </FlowTree>
        <FlowSnapshotSection>
          {flowSnapshots.map((flowSnapshot) => (
            <FlowSnapshotElement src={flowSnapshot.src} />
          ))}
        </FlowSnapshotSection>
      </FlowControllerCenter>
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
