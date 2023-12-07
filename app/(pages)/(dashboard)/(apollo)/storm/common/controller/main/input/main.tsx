import StormFileIcon from "../../../icon/file/main"
import StormSendIcon from "../../../icon/send/main";
import StormVoiceIcon from "../../../icon/voice/main";

export default function StormMessageInput() {
  return (
    <div className="flex flex-row flex-shrink-0 items-center justify-evenly w-full h-[80px] bg-gradient-to-r from-slate-700 to-slate-800 backdrop-blur-[20px]">
      <div className="w-[50px] h-[50px] flex justify-center items-center">
        <StormFileIcon/>
      </div>
      <div className="w-[450px] h-[30px] bg-slate-600 rounded-[30px]"></div>
      <div className="w-[100px] h-[50px] flex flex-row justify-between items-center">
        <div className="w-[40px] h-[40px] flex items-center justify-center rounded-[20px]">
          <StormVoiceIcon/>
        </div>
        <div className="w-[40px] h-[40px] flex items-center bg-blue-500 justify-center rounded-[20px]">
          <StormSendIcon/>
        </div>
      </div>
    </div>
  );
}
