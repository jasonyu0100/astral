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
          <div className="flex flex-row bg-white w-full h-full items-center overflow-auto">
            <div className="flex flex-col bg-red-500 w-[200px] h-full flex-shrink-0 items-center">
              <div className="flex flex-col justify-evenly items-center bg-yellow-400 w-full h-[150px] border-b border-slate-300">
                <p className="text-white">OCTOBER</p>
                <div className="w-full h-[1px] bg-slate-50 flex items-center justify-center">
                  <div className="w-[25px] h-[25px] bg-slate-50 rounded-full">

                  </div>

                </div>
              </div>
              <div className="flex flex-col items-center overflow-auto w-full space-y-[20px] p-[20px]" style={{ height: "100%" }}>
                <div className="flex flex-col bg-sky-500 w-[100px] h-[120px] flex-shrink-0"></div>
                <div className="flex flex-col bg-sky-500 w-[100px] h-[120px] flex-shrink-0"></div>
                <div className="flex flex-col bg-sky-500 w-[100px] h-[120px] flex-shrink-0"></div>
                <div className="flex flex-col bg-sky-500 w-[100px] h-[120px] flex-shrink-0"></div>
                <div className="flex flex-col bg-sky-500 w-[100px] h-[120px] flex-shrink-0"></div>
                <div className="flex flex-col bg-sky-500 w-[100px] h-[120px] flex-shrink-0"></div>
              </div>
            </div>
            <div className="flex flex-col bg-red-500 w-[200px] h-full flex-shrink-0 items-center">
              <div className="flex flex-col justify-center items-center bg-yellow-400 w-full h-[150px] border-b border-slate-300">
                <div className="w-full h-[1px] bg-slate-50">

                </div>
                <p className="text-white">OCTOBER</p>
              </div>
              <div className="flex flex-col items-center overflow-auto w-full space-y-[20px] p-[20px]" style={{ height: "100%" }}>
                <div className="flex flex-col bg-sky-500 w-[100px] h-[120px] flex-shrink-0"></div>
                <div className="flex flex-col bg-sky-500 w-[100px] h-[120px] flex-shrink-0"></div>
                <div className="flex flex-col bg-sky-500 w-[100px] h-[120px] flex-shrink-0"></div>
                <div className="flex flex-col bg-sky-500 w-[100px] h-[120px] flex-shrink-0"></div>
                <div className="flex flex-col bg-sky-500 w-[100px] h-[120px] flex-shrink-0"></div>
                <div className="flex flex-col bg-sky-500 w-[100px] h-[120px] flex-shrink-0"></div>
              </div>
            </div>
            <div className="flex flex-col bg-red-500 w-[200px] h-full flex-shrink-0 items-center">
              <div className="flex flex-col justify-center items-center bg-yellow-400 w-full h-[150px] border-b border-slate-300">
                <div className="w-full h-[1px] bg-slate-50">

                </div>
                <p className="text-white">OCTOBER</p>
              </div>
              <div className="flex flex-col items-center overflow-auto w-full space-y-[20px] p-[20px]" style={{ height: "100%" }}>
                <div className="flex flex-col bg-sky-500 w-[100px] h-[120px] flex-shrink-0"></div>
                <div className="flex flex-col bg-sky-500 w-[100px] h-[120px] flex-shrink-0"></div>
                <div className="flex flex-col bg-sky-500 w-[100px] h-[120px] flex-shrink-0"></div>
                <div className="flex flex-col bg-sky-500 w-[100px] h-[120px] flex-shrink-0"></div>
                <div className="flex flex-col bg-sky-500 w-[100px] h-[120px] flex-shrink-0"></div>
                <div className="flex flex-col bg-sky-500 w-[100px] h-[120px] flex-shrink-0"></div>
              </div>
            </div>
            <div className="flex flex-col bg-red-500 w-[200px] h-full flex-shrink-0 items-center">
              <div className="flex flex-col justify-center items-center bg-yellow-400 w-full h-[150px] border-b border-slate-300">
                <div className="w-full h-[1px] bg-slate-50">

                </div>
                <p className="text-white">OCTOBER</p>
              </div>
              <div className="flex flex-col items-center overflow-auto w-full space-y-[20px] p-[20px]" style={{ height: "100%" }}>
                <div className="flex flex-col bg-sky-500 w-[100px] h-[120px] flex-shrink-0"></div>
                <div className="flex flex-col bg-sky-500 w-[100px] h-[120px] flex-shrink-0"></div>
                <div className="flex flex-col bg-sky-500 w-[100px] h-[120px] flex-shrink-0"></div>
                <div className="flex flex-col bg-sky-500 w-[100px] h-[120px] flex-shrink-0"></div>
                <div className="flex flex-col bg-sky-500 w-[100px] h-[120px] flex-shrink-0"></div>
                <div className="flex flex-col bg-sky-500 w-[100px] h-[120px] flex-shrink-0"></div>
              </div>
            </div>
            <div className="flex flex-col bg-red-500 w-[200px] h-full flex-shrink-0 items-center">
              <div className="flex flex-col justify-center items-center bg-yellow-400 w-full h-[150px] border-b border-slate-300">
                <div className="w-full h-[1px] bg-slate-50">

                </div>
                <p className="text-white">OCTOBER</p>
              </div>
              <div className="flex flex-col items-center overflow-auto w-full space-y-[20px] p-[20px]" style={{ height: "100%" }}>
                <div className="flex flex-col bg-sky-500 w-[100px] h-[120px] flex-shrink-0"></div>
                <div className="flex flex-col bg-sky-500 w-[100px] h-[120px] flex-shrink-0"></div>
                <div className="flex flex-col bg-sky-500 w-[100px] h-[120px] flex-shrink-0"></div>
                <div className="flex flex-col bg-sky-500 w-[100px] h-[120px] flex-shrink-0"></div>
                <div className="flex flex-col bg-sky-500 w-[100px] h-[120px] flex-shrink-0"></div>
                <div className="flex flex-col bg-sky-500 w-[100px] h-[120px] flex-shrink-0"></div>
              </div>
            </div>
          </div>
          {/* <FlowTreeContainer>
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
          </FlowTreeContainer> */}
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
            <FlowSnapshot src={snapshot.src} />
          ))}
        </FlowSidebarElements>
      </FlowSidebar>
    </FlowWrapper>
  );
}
