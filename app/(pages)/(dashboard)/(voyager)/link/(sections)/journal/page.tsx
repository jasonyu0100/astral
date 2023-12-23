"use client";
import {
  backgroundStyles,
  borderStyles,
  containerStyles,
} from "@/(pages)/(common)/styles/data";
import StoryController from "../../(common)/controller/main";
import StoryRecordLog from "../../(common)/controller/record/log/main";
import StoryRecord from "../../(common)/controller/record/main";
import Layer from "@/(pages)/(common)/layer/main";
import { useState } from "react";
import StormSidePanelAvatar from "@/(pages)/(dashboard)/(apollo)/storm/(common)/controller/side-panel/avatar/main";

export default function Page() {
  const [navigationActive, changeNavigation] = useState(true);
  return (
    <>
      <Layer
        sizeStyle="h-full flex-grow"
        containerStyle={containerStyles["row"]}
        backgroundStyle={backgroundStyles["glass-5"]}
      >
        <StoryController>
          <StoryRecord>
            <StoryRecordLog></StoryRecordLog>
            <StoryRecordLog></StoryRecordLog>
          </StoryRecord>
        </StoryController>
        {navigationActive && (
          <Layer
            sizeStyle="w-[350px] h-full"
            containerStyle={containerStyles["col"]}
            backgroundStyle={backgroundStyles["glass-5"]}
            borderStyle={borderStyles["border-l"]}
          >
            <div className="w-full p-[2rem] flex flex-col space-y-[4rem]">
              <div className="flex flex-col space-y-[2rem]">
                <div className="flex flex-row items-center space-x-[1rem]">
                  <StormSidePanelAvatar />
                  <p className="text-white font-bold text-lg">
                    Hello World - Chat
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-[2rem]">
                <p className="text-slate-500 font-extraBold text-xl">
                  Yesterday
                </p>
                <div className="flex flex-row items-center space-x-[1rem]">
                  <StormSidePanelAvatar />
                  <p className="text-white font-bold text-lg">
                    Hello World - Chat
                  </p>
                </div>
                <div className="flex flex-row items-center space-x-[1rem]">
                  <StormSidePanelAvatar />
                  <p className="text-white font-bold text-lg">
                    Hello World - Chat
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-[2rem]">
                <p className="text-slate-500 font-extraBold text-xl">
                  Last Week
                </p>
                <div className="flex flex-row items-center space-x-[1rem]">
                  <StormSidePanelAvatar />
                  <p className="text-white font-bold text-lg">
                    Hello World - Chat
                  </p>
                </div>
                <div className="flex flex-row items-center space-x-[1rem]">
                  <StormSidePanelAvatar />
                  <p className="text-white font-bold text-lg">
                    Hello World - Chat
                  </p>
                </div>
              </div>
              <div className="flex flex-col space-y-[2rem]">
                <p className="text-slate-500 font-extraBold text-xl">
                  Last Month
                </p>
                <div className="flex flex-row items-center space-x-[1rem]">
                  <StormSidePanelAvatar />
                  <p className="text-white font-bold text-lg">
                    Hello World - Chat
                  </p>
                </div>
                <div className="flex flex-row items-center space-x-[1rem]">
                  <StormSidePanelAvatar />
                  <p className="text-white font-bold text-lg">
                    Hello World - Chat
                  </p>
                </div>
              </div>
            </div>
          </Layer>
        )}
      </Layer>
    </>
  );
}
