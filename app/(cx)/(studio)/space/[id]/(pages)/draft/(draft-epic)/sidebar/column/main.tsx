import { DraftSidebarSection } from "./section/main";

export function DraftSidebarColumn() {
  return (
    <div className='flex h-full w-full flex-col space-y-[2rem]'>
      <DraftSidebarSection/>
    </div>
  );
}
