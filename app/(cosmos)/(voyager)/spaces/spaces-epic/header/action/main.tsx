import { SpacesFlowIcon } from "../../icon/flow/main";

export interface SpacesHeaderActions extends React.ComponentPropsWithoutRef<"button"> {

}

export function SpacesHeaderAction({...props} : SpacesHeaderActions) {
  return (
    <button className="flex flex-col items-center justify-center rounded-[50px] bg-violet-500 h-[80px] w-[150px] ml-[5rem]" {...props}>
      <SpacesFlowIcon />
    </button>
  );
}
