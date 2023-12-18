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
import StormMessageInputLeft from "./common/controller/main/input/left/main";
import StormMessageInputText from "./common/controller/main/input/text/main";
import StormMessageInputRight from "./common/controller/main/input/right/main";
import StormMessageInputVoice from "./common/controller/main/input/right/send/main";
import StormMessageInputSend from "./common/controller/main/input/right/voice/main";

export default function StormPage() {
  return (
    <StormController>
      <div style={{ width: "calc(100% - 80px)" }}>
        <StormControllerMain>
          <StormHeader />
          <StormChatBody>
            <StormPartnerChatMessage>123132</StormPartnerChatMessage>
            <StormYouChatMessage>1231231132</StormYouChatMessage>
            <StormYouChatMessage>1231231132</StormYouChatMessage>
            <StormYouChatMessage>1231231132</StormYouChatMessage>
          </StormChatBody>
          <StormMessageInput>
            <StormMessageInputLeft />
            <StormMessageInputText />
            <StormMessageInputRight>
              <StormMessageInputVoice />
              <StormMessageInputSend />
            </StormMessageInputRight>
          </StormMessageInput>
        </StormControllerMain>
      </div>
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
