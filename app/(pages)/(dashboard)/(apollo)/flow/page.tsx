"use client";

import Layer from "@/(pages)/(common)/layer/main";
import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import FlowController from "./(common)/controller/main";
import FlowControllerTopRow from "./(common)/controller/top/main";
import FlowControllerCenter from "./(common)/controller/center/main";
import FlowControllerBottomRow from "./(common)/controller/bottom/main";
import FlowConstellation from "./(common)/controller/bottom/constellations/item/main";
import FlowControllerConstellationRow from "./(common)/controller/bottom/constellations/main";
import FlowSnapshotSection from "./(common)/controller/center/craft/main";
import FlowSnapshotElement from "./(common)/controller/center/craft/element/main";
import FlowConstellationAdd from "./(common)/controller/bottom/add/main";
import FlowTreeContainer from "./(common)/controller/center/tree/main";
import FlowSourceControlBranch from "./(common)/controller/center/tree/branch/main";
import FlowTopRowAddButton from "./(common)/controller/top/button/add/main";
import FlowTopRowLoomButton from "./(common)/controller/top/button/loom/main";
import FlowTopRowSearchButton from "./(common)/controller/top/button/search/main";
import { useState } from "react";
import {
  FlowTree,
  defaultFlowBranch,
  defaultFlowLeaf,
  defaultFlowSnapshot,
  defaultFlowSnapshots,
  defaultFlowTree,
} from "./data";
import {
  ApolloConstellation,
  defaultApolloConstellation,
  defaultApolloConstellations,
} from "../data";
import FlowTreeStem from "./(common)/controller/center/tree/branch/stem/main";
import FlowTreeLeaves from "./(common)/controller/center/tree/branch/leaves/main";
import FlowTreeLeaf from "./(common)/controller/center/tree/branch/leaves/leaf/main";
import FlowTreeLeafAdd from "./(common)/controller/center/tree/branch/leaves/add/main";

export default function Page() {
  const [flowTree, changeFlowTree] = useState<FlowTree>(defaultFlowTree);
  const [constellations, changeConstellations] = useState<
    ApolloConstellation[]
  >(defaultApolloConstellations);
  const [flowSnapshots, changeFlowSnapshots] = useState(defaultFlowSnapshots);

  return (
    <Layer
      sizeStyle="h-full flex-grow"
      containerStyle={containerStyles["row"]}
      backgroundStyle={backgroundStyles["glass-5"]}
    >
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
          <FlowTreeContainer>
            {flowTree.map((branch, i) => (
              <FlowSourceControlBranch>
                <FlowTreeStem branch={branch} />
                <FlowTreeLeaves>
                  {branch.leaves.map((leaf, j) => (
                    <FlowTreeLeaf leaf={leaf} />
                  ))}
                  <FlowTreeLeafAdd
                    onClick={() =>
                      changeFlowTree((prev) =>
                        prev.map((o, k) =>
                          k === i
                            ? { ...o, leaves: [...o.leaves, defaultFlowLeaf] }
                            : o
                        )
                      )
                    }
                  />
                </FlowTreeLeaves>
              </FlowSourceControlBranch>
            ))}
            <FlowSourceControlBranch>
              <FlowTreeStem branch={defaultFlowBranch} />
              <FlowTreeLeaves>
                <FlowTreeLeafAdd
                  onClick={() =>
                    changeFlowTree((prev) => [...prev, defaultFlowBranch])
                  }
                />
              </FlowTreeLeaves>
            </FlowSourceControlBranch>
          </FlowTreeContainer>
        </FlowControllerCenter>
        <FlowControllerBottomRow>
          <FlowConstellationAdd
            onClick={() =>
              changeConstellations((prev) => [
                ...prev,
                defaultApolloConstellation,
              ])
            }
          />
          <Layer
            sizeStyle="h-[80px]"
            borderStyle={borderStyles["border-r"]}
          ></Layer>
          <FlowControllerConstellationRow>
            {constellations.map((constellation) => (
              <FlowConstellation
                constellation={constellation}
                onClick={() => {}}
              />
            ))}
          </FlowControllerConstellationRow>
        </FlowControllerBottomRow>
      </FlowController>
      <FlowSnapshotSection>
        {flowSnapshots.map((flowSnapshot) => (
          <FlowSnapshotElement src={flowSnapshot.src} />
        ))}
      </FlowSnapshotSection>
    </Layer>
  );
}
