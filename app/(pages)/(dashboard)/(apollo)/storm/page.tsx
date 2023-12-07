"use client";
import {
  GlassContainer,
  sharpGlassBorder,
} from "@/(pages)/(common)/texture/glass/main";
import StormHeader from "./header/main";
import StormChatBody from "./chat/main";
import StormMessageInput from "./message/main";
import StormSidePanel from "./side-panel/main";

export default function ApolloStorm() {
  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col flex-shrink-0 bg-red-600 rounded-md w-[700px] h-[700px]">
          <StormHeader />
          <StormChatBody />
          <StormMessageInput/>
        </div>
        <StormSidePanel/>
      </div>
    </>
  );
}
