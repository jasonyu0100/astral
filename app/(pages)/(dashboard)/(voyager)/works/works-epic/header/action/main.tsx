import { WorksFlowIcon } from "../../icon/flow/main";

export interface WorksHeaderActions extends React.ComponentPropsWithoutRef<"button"> {

}

export function WorksHeaderAction({...props} : WorksHeaderActions) {
  return (
    <button className="flex flex-col items-center justify-center rounded-[50px] bg-violet-500 h-[80px] w-[150px] ml-[5rem]" {...props}>
      <WorksFlowIcon />
    </button>
  );
}
