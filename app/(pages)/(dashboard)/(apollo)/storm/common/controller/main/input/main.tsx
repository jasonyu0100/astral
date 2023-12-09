import Texture from "@/(pages)/(dashboard)/(common)/texture/main";
import StormFileIcon from "../../../icon/file/main";
import StormSendIcon from "../../../icon/send/main";
import StormVoiceIcon from "../../../icon/voice/main";
import { containerStyles } from "@/(pages)/(dashboard)/(common)/texture/data";
import StormMessageInputLeft from "./left/main";
import StormMessageInputText from "./text/main";
import StormMessageInputRight from "./right/main";
import StormMessageInputVoice from "./right/send/main";
import StormMessageInputSend from "./right/voice/main";

export default function StormMessageInput({children} : { children: React.ReactNode}) {
  return (
    <Texture
      displayName={StormMessageInput.name}
      sizeStyle="h-[80px] w-full"
      backgroundStyle="bg-gradient-to-r from-slate-100 to-slate-500 opacity-10"
      containerStyle={containerStyles["row-centered"]}
      borderStyle=""
    >
      {children}
    </Texture>
  );
}
