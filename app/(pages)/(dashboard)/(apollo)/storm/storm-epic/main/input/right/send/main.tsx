import { StormSendIcon } from "../../../../icons/send/main";
export interface StormMessageInputSendProps
  extends React.ComponentPropsWithoutRef<"button"> {}

export function StormMessageInputSend({...props} : StormMessageInputSendProps) {
  return (
    <button className="w-[40px] h-[40px] flex items-center bg-blue-500 justify-center rounded-[2rem]" {...props}>
      <StormSendIcon />
    </button>
  );
}
