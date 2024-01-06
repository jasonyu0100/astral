import { FlowPointHeader } from "./header/main";

interface FlowAddMoment extends React.ComponentPropsWithoutRef<"button"> {

}

export function FlowAddMoment({...props} : FlowAddMoment) {
  return (
      <button className="flex flex-col w-[250px] h-full flex-shrink-0 items-center" {...props}>
        <FlowPointHeader />
      </button>
  );
}
