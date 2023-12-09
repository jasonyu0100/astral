import Texture from "@/(pages)/(dashboard)/(common)/texture/main";
import StormFileIcon from "../../../icon/file/main";
import StormSendIcon from "../../../icon/send/main";
import StormVoiceIcon from "../../../icon/voice/main";

export default function StormMessageInput() {
  return (
    <Texture
      displayName={StormMessageInput.name}
      sizeStyle="h-[80px] w-full"
      backgroundStyle="bg-gradient-to-r from-slate-100 to-slate-500 opacity-10"
      borderStyle=""
    >
      <div className="flex flex-row flex-shrink-0 items-center justify-evenly w-full h-full">
        <div className="w-[50px] h-[50px] flex justify-center items-center">
          <StormFileIcon />
        </div>
        <div className="w-[450px] h-[30px] bg-slate-600 rounded-[30px]"></div>
        <div className="w-[100px] h-[50px] flex flex-row justify-between items-center">
          <div className="w-[40px] h-[40px] flex items-center justify-center rounded-[20px]">
            <StormVoiceIcon />
          </div>
          <div className="w-[40px] h-[40px] flex items-center bg-blue-500 justify-center rounded-[20px]">
            <StormSendIcon />
          </div>
        </div>
      </div>
    </Texture>
  );
}
