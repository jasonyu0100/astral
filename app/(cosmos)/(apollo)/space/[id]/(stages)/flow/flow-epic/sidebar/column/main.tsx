import { FlowSidebarSection } from "./section/main";

export function FlowSidebarColumn() {
  return (
    <div className='flex h-full w-full flex-col space-y-[2rem]'>
      <FlowSidebarSection/>
    </div>
  );
}
