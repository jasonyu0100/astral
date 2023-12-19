"use client";

import Layer from "@/(pages)/(common)/layer/main";
import { borderStyles } from "@/(pages)/(common)/styles/data";
import FlowController from "./(common)/controller/main";
import FlowControllerTopRow from "./(common)/controller/top-row/main";
import FlowControllerCenterSection from "./(common)/controller/center-section/main";
import FlowControllerBottomRow from "./(common)/controller/bottom-row/main";
import FlowBottomRowItem from "./(common)/controller/bottom-row/constellation-row/item/main";
import FlowControllerConstellationRow from "./(common)/controller/bottom-row/constellation-row/main";
import FlowSnapshotSection from "./(common)/controller/center-section/craft/main";
import FlowSnapshotElement from "./(common)/controller/center-section/craft/element/main";
import FlowBottomRowAdd from "./(common)/controller/bottom-row/add/main";
import FlowSourceControlSection from "./(common)/controller/center-section/source-control/main";

export default function FlowPage() {
  return (
    <>
      <FlowController>
        <FlowControllerTopRow />
        <FlowControllerCenterSection>
          <FlowSourceControlSection>
            <div className="flex flex-col h-full px-[2rem] pb-[2rem] overflow-auto">
              <div className="flex flex-row space-x-[20px] items-center">
                <div className="relative flex flex-col w-[20px] h-[150px]">
                  <div className="absolute h-[150px] w-[20px]">
                    <div className="relative top-0 left-[10px] w-[1px] h-full bg-slate-500" />
                    <div className="relative bottom-[10px] w-[20px] h-[20px] rounded-full bg-slate-500" />
                  </div>
                </div>
                <div className="flex flex-row w-full p-[10px] space-x-[20px] ">
                  <div className="flex-shrink-0 w-[120px] h-[80px] bg-slate-500 rounded-[1rem]"></div>
                  <div className="flex-shrink-0 w-[120px] h-[80px] bg-slate-500 rounded-[1rem]"></div>
                  <div className="flex-shrink-0 w-[120px] h-[80px] bg-slate-500 rounded-[1rem]"></div>
                </div>
              </div>
              <div className="flex flex-row space-x-[20px] items-center">
                <div className="relative flex flex-col w-[20px] h-[150px]">
                  <div className="absolute h-[150px] w-[20px]">
                    <div className="relative top-0 left-[10px] w-[1px] h-full bg-slate-500" />
                    <div className="relative bottom-[10px] w-[20px] h-[20px] rounded-full bg-slate-500" />
                  </div>
                </div>
                <div className="flex flex-row w-full p-[10px] space-x-[20px] ">
                  <div className="flex-shrink-0 w-[120px] h-[80px] bg-slate-500 rounded-[1rem]"></div>
                  <div className="flex-shrink-0 w-[120px] h-[80px] bg-slate-500 rounded-[1rem]"></div>
                  <div className="flex-shrink-0 w-[120px] h-[80px] bg-slate-500 rounded-[1rem]"></div>
                  <div className="flex-shrink-0 w-[120px] h-[80px] bg-slate-500 rounded-[1rem]"></div>
                  <div className="flex-shrink-0 w-[120px] h-[80px] bg-slate-500 rounded-[1rem]"></div>
                </div>
              </div>
              <div className="flex flex-row space-x-[20px] items-center">
                <div className="relative flex flex-col w-[20px] h-[150px]">
                  <div className="absolute h-[150px] w-[20px]">
                    <div className="relative top-0 left-[10px] w-[1px] h-full bg-slate-500" />
                    <div className="relative bottom-[10px] w-[20px] h-[20px] rounded-full bg-slate-500" />
                  </div>
                </div>
                <div className="flex flex-row w-full p-[10px] space-x-[20px] ">
                  <div className="flex-shrink-0 w-[120px] h-[80px] bg-slate-500 rounded-[1rem]"></div>
                  <div className="flex-shrink-0 w-[120px] h-[80px] bg-slate-500 rounded-[1rem]"></div>
                  <div className="flex-shrink-0 w-[120px] h-[80px] bg-slate-500 rounded-[1rem]"></div>
                  <div className="flex-shrink-0 w-[120px] h-[80px] bg-slate-500 rounded-[1rem]"></div>
                  <div className="flex-shrink-0 w-[120px] h-[80px] bg-slate-500 rounded-[1rem]"></div>
                  <div className="flex-shrink-0 w-[120px] h-[80px] bg-slate-500 rounded-[1rem]"></div>
                  <div className="flex-shrink-0 w-[120px] h-[80px] bg-slate-500 rounded-[1rem]"></div>
                  <div className="flex-shrink-0 w-[120px] h-[80px] bg-slate-500 rounded-[1rem]"></div>
                </div>
              </div>
              <div className="flex flex-row space-x-[20px] items-center">
                <div className="relative flex flex-col w-[20px] h-[150px]">
                  <div className="absolute h-[150px] w-[20px]">
                    <div className="relative top-0 left-[10px] w-[1px] h-full bg-slate-500" />
                    <div className="relative bottom-[10px] w-[20px] h-[20px] rounded-full bg-slate-500" />
                  </div>
                </div>
                <div className="flex flex-row w-full p-[10px] space-x-[20px] ">
                  <div className="flex-shrink-0 w-[120px] h-[80px] bg-slate-500 rounded-[1rem]"></div>
                  <div className="flex-shrink-0 w-[120px] h-[80px] bg-slate-500 rounded-[1rem]"></div>
                  <div className="flex-shrink-0 w-[120px] h-[80px] bg-slate-500 rounded-[1rem]"></div>
                  <div className="flex-shrink-0 w-[120px] h-[80px] bg-slate-500 rounded-[1rem]"></div>
                  <div className="flex-shrink-0 w-[120px] h-[80px] bg-slate-500 rounded-[1rem]"></div>
                  <div className="flex-shrink-0 w-[120px] h-[80px] bg-slate-500 rounded-[1rem]"></div>
                  <div className="flex-shrink-0 w-[120px] h-[80px] bg-slate-500 rounded-[1rem]"></div>
                  <div className="flex-shrink-0 w-[120px] h-[80px] bg-slate-500 rounded-[1rem]"></div>
                </div>
              </div>
            </div>
          </FlowSourceControlSection>
          <FlowSnapshotSection>
            <FlowSnapshotElement />
            <FlowSnapshotElement />
            <FlowSnapshotElement />
            <FlowSnapshotElement />
          </FlowSnapshotSection>
        </FlowControllerCenterSection>
        <FlowControllerBottomRow>
          <FlowBottomRowAdd />
          <Layer
            sizeStyle="h-[80px]"
            borderStyle={borderStyles["border-r"]}
          ></Layer>
          <FlowControllerConstellationRow>
            <FlowBottomRowItem />
            <FlowBottomRowItem />
            <FlowBottomRowItem />
            <FlowBottomRowItem />
            <FlowBottomRowItem />
            <FlowBottomRowItem />
            <FlowBottomRowItem />
            <FlowBottomRowItem />
          </FlowControllerConstellationRow>
        </FlowControllerBottomRow>
      </FlowController>
    </>
  );
}
