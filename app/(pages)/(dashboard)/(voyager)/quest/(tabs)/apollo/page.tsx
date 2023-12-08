"use client";

import QuestClapperContainer from "../../common/clapper/container/main";
import ClapperContents from "../../common/clapper/contents/main";
import QuestGuideLink from "../../common/guide/body/link/main";
import QuestGuideBody from "../../common/guide/body/main";
import QuestGuideController from "../../common/guide/main";
import QuestGuideWrapper from "../../common/guide/wrapper/main";

export default function QuestApolloPage() {
  return (
    <QuestGuideWrapper>
      <div
        className="w-full overflow-auto  border border-slate-200 border-opacity-30 rounded-md"
        style={{ height: "100%" }}
      >
        <div className="flex flex-col flex-shrink-0 justify-center items-center rounded-md p-[40px] w-full h-[700px]">
          <QuestClapperContainer>
            <ClapperContents />
          </QuestClapperContainer>
        </div>
        <div className="w-full p-[20px] py-[50px] flex flex-col space-y-[40px]">
          <div>
            <div className="flex flex-col">
              <div className="text-white text-xl font-extrabold font-['Creato Display'] leading-7">
                Day 20
              </div>
              <div className="w-full mt-[5px] h-[0px] border border-slate-400 border-opacity-30"></div>
            </div>
            <div className="w-full text-white text-base font-normal leading-normal">
              Lorem ipsum dolor sit amet consectetur. Risus aliquam id amet
              laoreet velit. Fringilla etiam ac pharetra auctor sed sed aenean
              in rhoncus. Quisque diam egestas eget facilisis scelerisque
              eleifend. Elementum blandit venenatis sagittis enim mauris
              faucibus fringilla.
            </div>
          </div>
          <div>
            <div className="flex flex-col">
              <div className="text-white text-xl font-extrabold font-['Creato Display'] leading-7">
                Day 12
              </div>
              <div className="w-full mt-[5px] h-[0px] border border-slate-400 border-opacity-30"></div>
            </div>
            <div className="w-full text-white text-base font-normal leading-normal">
              Lorem ipsum dolor sit amet consectetur. Risus aliquam id amet
              laoreet velit. Fringilla etiam ac pharetra auctor sed sed aenean
              in rhoncus. Quisque diam egestas eget facilisis scelerisque
              eleifend. Elementum blandit venenatis sagittis enim mauris
              faucibus fringilla.
            </div>
          </div>
        </div>
      </div>
      <QuestGuideController>
        <QuestGuideBody>
          <QuestGuideLink>Day 10</QuestGuideLink>
          <QuestGuideLink>Day 5</QuestGuideLink>
          <QuestGuideLink>Day 0</QuestGuideLink>
        </QuestGuideBody>
      </QuestGuideController>
    </QuestGuideWrapper>
  );
}
