import { ButtonInputProps } from "@/(common)/types/main";
import { SpacesFlowIcon } from "../../icon/flow/main";


export function SpacesHeaderAction({...props} : ButtonInputProps) {
  return (
    <button className="flex flex-col items-center justify-center rounded-[50px] bg-violet-500 h-[80px] w-[150px] ml-[5rem]" {...props}>
      <SpacesFlowIcon />
    </button>
  );
}
