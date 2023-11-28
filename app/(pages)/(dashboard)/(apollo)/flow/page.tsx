"use client";

import DraftPolaroid from "../draft/common/polaroid/main";
import StickyStack from "./common/stack/main";

export default function ApolloFlow() {
  return (
    <>
      <div className="flex flex-col flex-shrink-0 bg-white rounded-md w-[900px] h-[500px]">
        <div className="flex flex-row h-[200px] flex-shrink-0">
          <div className="flex flex-row overflow-auto items-center space-x-[20px] p-[20px] flex-shrink-0 bg-red-600 rounded-md w-[700px] h-[200px]">
            <DraftPolaroid />
            <DraftPolaroid />
            <DraftPolaroid />
            <DraftPolaroid />
            <DraftPolaroid />
            <DraftPolaroid />
            <DraftPolaroid />
            <DraftPolaroid />
          </div>
          <div className="flex flex-shrink-0 items-center justify-center bg-blue-600 rounded-md w-[200px] h-[200px]">
            <div className="w-[120px] h-[120px] bg-white"></div>
          </div>
        </div>
        <div className="flex flex-row h-[500px] flex-shrink-0">
          <div className="flex flex-row overflow-auto flex-shrink-0 space-x-[20px] bg-blue-600 rounded-md w-[700px] h-full p-[20px]">
            <StickyStack />
            <StickyStack />
            <StickyStack />
            <StickyStack />
            <StickyStack />
            <StickyStack />
            <StickyStack />
          </div>
          <div className="flex flex-col overflow-auto flex-shrink-0 space-y-[20px] p-[20px] items-center bg-red-600 rounded-md w-[200px] h-full">
            <DraftPolaroid />
            <DraftPolaroid />
            <DraftPolaroid />
            <DraftPolaroid />
            <DraftPolaroid />
            <DraftPolaroid />
            <DraftPolaroid />
            <DraftPolaroid />
          </div>
        </div>
      </div>
    </>
  );
}
