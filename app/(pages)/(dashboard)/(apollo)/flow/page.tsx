"use client";

import FlowController from "./flow-epic/main";
import FlowControllerCenter from "./flow-epic/center/main";
import FlowControllerBottomRow from "./flow-epic/bottom/main";
import FlowConstellation from "./flow-epic/bottom/constellations/item/main";
import FlowControllerConstellationRow from "./flow-epic/bottom/constellations/main";
import FlowSidebar from "./flow-epic/sidebar/main";
import FlowConstellationAdd from "./flow-epic/bottom/add/main";
import FlowTreeContainer from "./flow-epic/center/tree/main";
import FlowSourceControlBranch from "./flow-epic/center/tree/branch/main";
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
import FlowTreeStem from "./flow-epic/center/tree/branch/stem/main";
import FlowTreeLeaves from "./flow-epic/center/tree/branch/leaves/main";
import FlowTreeLeaf from "./flow-epic/center/tree/branch/leaves/leaf/main";
import FlowTreeLeafAdd from "./flow-epic/center/tree/branch/leaves/add/main";
import FlowWrapper from "./flow-epic/wrapper/main";
import FlowSidebarHeaderTitle from "./flow-epic/sidebar/header/title/main";
import FlowSidebarButtonRow from "./flow-epic/sidebar/header/button-row/main";
import TopRowAddButton from "./flow-epic/sidebar/header/button-row/button/add/main";
import TopRowSearchButton from "./flow-epic/sidebar/header/button-row/button/search/main";
import FlowSidebarElements from "./flow-epic/sidebar/elements/main";
import FlowSnapshot from "./flow-epic/sidebar/elements/element/main";
import FlowHeader from "./flow-epic/sidebar/header/main";
import FlowLoomButton from "./flow-epic/sidebar/header/button-row/button/loom/main";

export default function Page() {
  const [flowTree, changeFlowTree] = useState<FlowTree>(defaultFlowTree);
  const [constellations, changeConstellations] = useState<
    ApolloConstellation[]
  >(defaultApolloConstellations);
  const [flowSnapshots, changeFlowSnapshots] = useState(defaultFlowSnapshots);

  return (
    <FlowWrapper>

      <FlowController>
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
          <FlowControllerConstellationRow>
            {constellations.map((constellation) => (
              <FlowConstellation
                constellation={constellation}
                onClick={() => {}}
              />
            ))}
          </FlowControllerConstellationRow>
            <FlowConstellationAdd
              onClick={() =>
                changeConstellations((prev) => [
                  ...prev,
                  defaultApolloConstellation,
                ])
              }
            />
        </FlowControllerBottomRow>
      </FlowController>

      <FlowSidebar>
        <FlowHeader>
          <FlowSidebarHeaderTitle>Snapshots</FlowSidebarHeaderTitle>
          <FlowSidebarButtonRow>
            <TopRowAddButton
              onClick={() =>
                changeFlowSnapshots((prev) => [...prev, defaultFlowSnapshot])
              }
            />
            <TopRowSearchButton />
            <FlowLoomButton />
          </FlowSidebarButtonRow>
        </FlowHeader>
        <FlowSidebarElements>
          {flowSnapshots.map((snapshot) => (
            <FlowSnapshot
              src={snapshot.src}
            />
          ))}
        </FlowSidebarElements>
      </FlowSidebar>

    </FlowWrapper>
  );
}
