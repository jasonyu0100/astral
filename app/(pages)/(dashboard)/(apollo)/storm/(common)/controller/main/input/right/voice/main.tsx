import StormVoiceIcon from "../../../../../icon/voice/main";

export interface StormMessageInputTextProps
  extends React.ComponentPropsWithoutRef<"input"> {}

export default function StormMessageInputVoice() {
  return (
    <div className="w-[40px] h-[40px] flex items-center justify-center rounded-[2rem]">
      <StormVoiceIcon />
    </div>
  );
}
