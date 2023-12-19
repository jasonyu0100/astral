import StormSendIcon from "../../../../../icon/send/main";
export interface StormMessageInputSendProps
  extends React.ComponentPropsWithoutRef<"button"> {}

export default function StormMessageInputSend({...props} : StormMessageInputSendProps) {
  return (
    <div className="w-[40px] h-[40px] flex items-center bg-blue-500 justify-center rounded-[2rem]" {...props}>
      <StormSendIcon />
    </div>
  );
}
