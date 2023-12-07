"use client";
import StormHeader from "./common/controller/main/header/main";
import StormChatBody from "./common/controller/main/chat/main";
import StormMessageInput from "./common/controller/main/input/main";
import StormSidePanel from "./common/controller/side-panel/main";
import StormController from "./common/controller/main";
import StormControllerMain from "./common/controller/main/main";

export default function ApolloStorm() {
  return (
    <StormController>
      <StormControllerMain>
        <StormHeader />
        <StormChatBody />
        <StormMessageInput />
      </StormControllerMain>
      <StormSidePanel />
    </StormController>
  );
}
