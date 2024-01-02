import { StormVoiceIcon } from "../../../../icons/voice/main";

export interface StormMessageInputTextProps
  extends React.ComponentPropsWithoutRef<"input"> {}

export function StormMessageInputVoice() {
  return (
    <div className="w-[40px] h-[40px] flex items-center justify-center rounded-[2rem]">
      <StormVoiceIcon />
    </div>
  );
}
