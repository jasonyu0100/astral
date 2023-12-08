"use client";
import StormHeader from "./common/controller/main/header/main";
import StormChatBody from "./common/controller/main/chat/main";
import StormMessageInput from "./common/controller/main/input/main";
import StormSidePanel from "./common/controller/side-panel/main";
import StormController from "./common/controller/main";
import StormControllerMain from "./common/controller/main/main";
import StormPartnerChatMessage from "./common/controller/main/chat/message/partner/main";
import StormYouChatMessage from "./common/controller/main/chat/message/you/main";
import StormSidePanelAvatar from "./common/controller/side-panel/avatar/main";

export default function ApolloStorm() {
  return (
    <StormController>
      <StormControllerMain>
        <StormHeader />
        <StormChatBody>
          <StormPartnerChatMessage>123132</StormPartnerChatMessage>
          <StormYouChatMessage>1231231132</StormYouChatMessage>
          <StormYouChatMessage>1231231132</StormYouChatMessage>
          <StormYouChatMessage>1231231132</StormYouChatMessage>
        </StormChatBody>
        <StormMessageInput />
      </StormControllerMain>
      <StormSidePanel>
        <StormSidePanelAvatar />
        <StormSidePanelAvatar />
        <StormSidePanelAvatar />
        <StormSidePanelAvatar />
        <StormSidePanelAvatar />
        <StormSidePanelAvatar />
        <StormSidePanelAvatar />
        <StormSidePanelAvatar />
      </StormSidePanel>
    </StormController>
  );
}
